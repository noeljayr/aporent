"use client";

import "@/css/search.css";
import useExandSearchStore from "@/context/expandSearch";
import { IconAdjustmentsOff } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import useSelectedPropertyStore from "@/context/selectedProperty";
import Location from "./Location";
import Status from "./Status";
import Category from "./Category";
import PriceRange from "./PriceRange";
import Input from "./Input";

function Search() {
  const { setExpandSearch, expandSearch } = useExandSearchStore();
  const { selectedId } = useSelectedPropertyStore();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY >= 35;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  }, []);

  const expand = (state: boolean | null) => {
    setExpandSearch(!state || selectedId !== null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll(); // Set initial scroll state
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div
      className={`search ${
        isScrolled ? "top-[1rem] scrolled" : "top-[4.5rem]"
      } grid fixed ${expandSearch ? "gap-2 overflow-y-auto" : "gap-1"} ${
        selectedId !== null
          ? "opacity-0 invisible pointer-events-none"
          : "opacity-100"
      }`}
    >
      <Input />
      <Location />
      <Status />
      <Category />
      <PriceRange />
      <div
        className={`cta-container  ${
          expandSearch ? "gap-2 grid absolute left-2 bottom-2" : "gap-1 flex"
        }`}
      >
        <button className="cta">{expandSearch ? "Filter" : "Search"}</button>
        <button
          onClick={() => {
            expand(expandSearch);
          }}
          className="cta-2"
        >
          {expandSearch ? <IconAdjustmentsOff color="#080e1c" /> : "Filter"}
        </button>
      </div>
    </div>
  );
}

export default Search;
