"use client";

import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import useExandSearchStore from "@/context/expandSearch";

function PropertyType() {
  const { expandSearch } = useExandSearchStore();

  return expandSearch ? (
    <div
      className="category filter justify-center flex flex-col
      p-2"
    >
      <span className="label font-medium cursor-pointer">Type</span>

      <div className="property-type h-fit filters-grid grid grid-cols-3  gap-2 mt-2">
        <span className="checkbox-container ">
          <span className="checkbox"></span>
          <span className="checkbox-label">House</span>
        </span>
        <span className="checkbox-container ">
          <span className="checkbox"></span>
          <span className="checkbox-label">Apartment</span>
        </span>
        <span className="checkbox-container ">
          <span className="checkbox"></span>
          <span className="checkbox-label">Guest House</span>
        </span>
        <span className="checkbox-container ">
          <span className="checkbox"></span>
          <span className="checkbox-label">Quaters</span>
        </span>
        <span className="checkbox-container ">
          <span className="checkbox"></span>
          <span className="checkbox-label">Bedsitter</span>
        </span>
      </div>
    </div>
  ) : (
    <>
      <div
        className="category filter justify-center flex flex-col
      px-2"
      >
        <span className="label font-medium cursor-pointer">Type</span>
        <span className="cursor-pointer filter-value grid">
          <span className="value">All</span>
          <IconChevronDown />
        </span>
      </div>
    </>
  );
}

export default PropertyType;
