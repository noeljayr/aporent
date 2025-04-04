import { IconChevronDown, IconCheck } from "@tabler/icons-react";
import useExandSearchStore from "@/context/expandSearch";

function Status() {
  const { expandSearch } = useExandSearchStore();
  return expandSearch ? (
    <div
      className="status filter justify-center flex flex-col
      p-2"
    >
      <span className="label font-medium">Status</span>

      <div className="statuses h-fit filters-grid grid grid-cols-2  gap-2 mt-2">
        <span className="checkbox-container checked-checkbox">
          <span className="checkbox">
            <IconCheck />
          </span>
          <span className="checkbox-label">Unoccupied</span>
        </span>
        <span className="checkbox-container">
          <span className="checkbox">
            <IconCheck />
          </span>
          <span className="checkbox-label">Occupied</span>
        </span>
        <span className="checkbox-container">
          <span className="checkbox">
            <IconCheck />
          </span>
          <span className="checkbox-label">Being viewed</span>
        </span>
        <span className="checkbox-container">
          <span className="checkbox">
            <IconCheck />
          </span>
          <span className="checkbox-label">Not being viewed</span>
        </span>
      </div>
    </div>
  ) : (
    <>
      <div
        className="status filter justify-center flex flex-col
      px-2"
      >
        <span className="label font-medium cursor-pointer">Status</span>
        <span className="cursor-pointer filter-value grid">
          <span className="value">All</span>
          <IconChevronDown />
        </span>
      </div>
    </>
  );
}

export default Status;
