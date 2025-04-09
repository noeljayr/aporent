"use client";

import "@/css/index.css";
import "@/css/properties.css";
import Search from "@/components/search/Search";
import useExandSearchStore from "@/context/expandSearch";
import useSelectedPropertyStore from "@/context/selectedProperty";
import PropertyView from "@/components/properties/PropertyView";
import Properties from "@/components/properties/Properties";

export default function Home() {
  const { expandSearch } = useExandSearchStore();
  const { expandProperty } = useSelectedPropertyStore();

  return (
    <>
      <div
        className={`main-content relative flex-col flex ${
          expandSearch ? "expand-search" : "collapse-search"
        } ${expandProperty ? "expand-property-view" : ""} `}
      >
        <Search />
        <PropertyView />
        <Properties />
      </div>
    </>
  );
}
