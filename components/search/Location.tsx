"use client";

import { formatLocation } from "@/utils/formatLocation";
import React, { useState, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface LocationData {
  region: string;
  city: string;
  precise: string;
}

function Location() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if geolocation is available
    if (!navigator.geolocation) {
      setError("Choose location");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Reverse geocode using OpenStreetMap's Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();

          // Check if the location is in Malawi using country code ('mw')
          if (data.address && data.address.country_code === "mw") {
            // Extract address components; adjust these fields as needed for your display
            const region = data.address.state || "Choose location";
            // Try city, town, or county as fallback options
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county ||
              "Choose location";
            // Use a more precise description if available
            const precise = data.display_name || "Choose location";

            setLocation({
              region,
              city,
              precise,
            });
          } else {
            setError("Choose location");
          }
        } catch (err: any) {
          setError("Error fetching location details.");
        }
      },
      (err) => {
        setError(err.message);
      }
    );
  }, []);

  return (
    <div className="location filter truncate flex flex-col justify-center px-2">
      <span className="label font-medium cursor-pointer">Location</span>

      <span className="cursor-pointer filter-value grid">
        <span className="value truncate">
          {error ? (
            <span>Choose Location</span>
          ) : location ? (
            <>
              Auto Detected {`(`}
              {formatLocation(location.city)}
              {`)`}
            </>
          ) : (
            <span>Detecting your location...</span>
          )}
        </span>
        <IconChevronDown />
      </span>
    </div>
  );
}

export default Location;
