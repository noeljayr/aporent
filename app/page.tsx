"use client";

import "@/css/index.css";
import "@/css/properties.css";
import Search from "@/components/search/Search";
import useExandSearchStore from "@/context/expandSearch";
import useSelectedPropertyStore from "@/context/selectedProperty";
import Property from "@/components/properties/Property";
import PropertyView from "@/components/properties/PropertyView";

const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Home() {
  const { expandSearch } = useExandSearchStore();
  const { selectedId, expandProperty } = useSelectedPropertyStore();

  return (
    <>
      <div
        className={`main-content relative flex-col flex ${
          expandSearch ? "expand-search" : "collapse-search"
        } ${expandProperty ? "expand-property-view" : ""} `}
      >
        <Search />
        <PropertyView />

        <div className="properties grid">
          {properties.map((property, index) => (
            <Property
              key={index}
              className={`${
                selectedId === property ? "selected-property" : ""
              }`}
              id={property}
            />
          ))}
        </div>
      </div>
    </>
  );
}
