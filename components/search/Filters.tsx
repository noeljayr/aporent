import "@/css/search/filters.css";

import useExandSearchStore from "@/context/expandSearch";
import PropertyType from "./PropertyType";
import Location from "./Location";
import PriceRange from "./PriceRange";
import Status from "./Status";
import BedRooms from "./BedRooms";

function Filters() {
  const { expandSearch } = useExandSearchStore();
  return (
    <div
      className={`filters-container hide-scrollbar gap-2 ${expandSearch ? "grid" : "hidden"}`}
    >
      <Location />
      <Status />
      <PropertyType />
      <BedRooms />
      <PriceRange />
    </div>
  );
}

export default Filters;
