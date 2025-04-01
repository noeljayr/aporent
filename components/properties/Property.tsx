"use client";

import useExandSearchStore from "@/context/expandSearch";
import useSelectedPropertyStore from "@/context/selectedProperty";

interface PropertyTypes {
  id: number;
  className: string | number;
}

function Property(props: PropertyTypes) {
  const { setExpandSearch } = useExandSearchStore();
  const { setSelectedId, selectedId } = useSelectedPropertyStore();

  const selectProperty = (id: number) => {
    if (selectedId == id) {
      setExpandSearch(true);
      setSelectedId(null);
    } else {
      setExpandSearch(true);
      setSelectedId(props.id);
    }
  };

  return (
    <div
      onClick={() => {
        selectProperty(props.id);
      }}
      className={`property ${props.className}`}
    ></div>
  );
}

export default Property;
