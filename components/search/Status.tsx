import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

function Status() {
  return (
    <div
      className="status justify-center flex flex-col
      px-2"
    >
      <span className="label font-medium cursor-pointer">Status</span>
      <span className="cursor-pointer filter-value grid">
        <span className="value">Unoccupied</span>
        <IconChevronDown />
      </span>
    </div>
  );
}

export default Status;
