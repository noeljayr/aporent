"use client";

import useSelectedPropertyStore from "@/context/selectedProperty";

function PropertyView() {
  const { selectedId } = useSelectedPropertyStore();
  return (
    <div
      className={`property-view ${
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
