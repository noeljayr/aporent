"use client";

import useSelectedPropertyStore from "@/context/selectedProperty";
import { useCallback, useEffect, useState } from "react";

function PropertyView() {
  const { selectedId } = useSelectedPropertyStore();

  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`property-view
        ${isScrolled ? "top-[1rem] scrolled" : "top-[4.5rem]"} 
        ${
          selectedId !== null
            ? "property-view-active opacity-100 z-[3] visible pointer-events-auto"
            : "opacity-0 invisible z-0 pointer-events-none"
        }`}
    >
      {selectedId}
    </div>
  );
}

export default PropertyView;
