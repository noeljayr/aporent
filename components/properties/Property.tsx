"use client";

import useExandSearchStore from "@/context/expandSearch";
import useSelectedPropertyStore from "@/context/selectedProperty";

interface PropertyTypes {
  id: number;
  className: string | number;
}

function Property(props: PropertyTypes) {
  const { setSelectedId, selectedId, setExpandProperty } = useSelectedPropertyStore();

  const selectProperty = (id: number) => {
    if (selectedId == id) {
      setExpandProperty(false);
      setSelectedId(null);
    } else {
      setExpandProperty(true);
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
