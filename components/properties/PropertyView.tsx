"use client";

import useSelectedPropertyStore from "@/context/selectedProperty";
import properties from "@/data/dummy-properties";
import { useCallback, useEffect, useState } from "react";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import Image from "next/image";
import { IconHeart, IconMapPin, IconShare2 } from "@tabler/icons-react";

import { motion } from "framer-motion";
import PropertyInfo from "./PropertyInfo";

function PropertyView() {
  const { selectedId } = useSelectedPropertyStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY >= 35;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll(); // Set initial scroll state
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div
      className={`property-view overflow-y-auto hide-scrollbar
        ${isScrolled ? "top-[1rem] scrolled" : "top-[4.5rem]"} 
        ${
          selectedId !== null
            ? "property-view-active opacity-100 z-[3] visible pointer-events-auto"
            : "opacity-0 invisible z-0 pointer-events-none"
        }`}
    >
      {properties.map((property, index) => {
        if (property.property_id === selectedId) {
          return (
            <div
              key={index}
              className="property-details w-full h-full overflow-hidden grid gap-2.5"
            >
              <div className="property-images grid gap-1.5">
                <div className="image">
                  <Image
                    key={index}
                    src={`/property-images/${property.images[0]}` || ""}
                    alt={`${property.title} image`}
                    width={500}
                    height={300}
                  />
                </div>

                <div className="image">
                  {property.images[1] && (
                    <Image
                      key={index}
                      src={`/property-images/${property.images[2]}`}
                      alt={`${property.title} image`}
                      width={500}
                      height={300}
                    />
                  )}
                </div>

                <div className="image relative">
                  {property.images[2] && (
                    <Image
                      key={index}
                      src={`/property-images/${property.images[2]}`}
                      alt={`${property.title} image`}
                      width={500}
                      height={300}
                    />
                  )}
                  <div className="overlay absolute w-full h-full flex items-center justify-center font-bold text-center cursor-pointer">
                    View all {property.images.length} Photos
                  </div>
                </div>
              </div>

              <div className="flex actions gap-4 items-center">
                <span
                  className={`save-btn flex items-center gap-1 font-medium cursor-pointer ${
                    property.isSaved ? "saved" : ""
                  }`}
                >
                  <IconHeart />
                  {property.isSaved ? "Saved" : "Save"}
                </span>

                <span className="share-btn flex items-center gap-1 font-medium cursor-pointer">
                  <IconShare2 />
                  Share
                </span>
              </div>

              <div className="flex gap-2 justify-between items-center">
                <div className="flex flex-col">
                  <span className="title font-semibold">{property.title}</span>
                  <span className="location flex gap-1 items-center opacity-75">
                    <IconMapPin />
                    {property.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rent font-semibold">
                    K {formatAmountWithCommas(property.price.toString())}
                  </span>

                  <span className="seperator font-extrabold opacity-50">•</span>
                  <span className="frequency">
                    {property.payment_frequency}
                  </span>
                  
                </div>
              </div>

              <PropertyInfo property={property} />

              <button className="cta">Book viewing</button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default PropertyView;
