import React from "react";

function BedRooms() {
  return (
    <div
      className="bedrooms filter flex flex-col
      p-2"
    >
      <span className="label font-medium">Bed rooms</span>

      <div className="bedrooms h-fit filters-grid grid grid-cols-2  gap-2 mt-2">
        <span className="radio-btn-container">
          <span className="radio-btn" />
          <span className="radio-btn-label">More than 3</span>
        </span>
        <span className="radio-btn-container">
          <span className="radio-btn" />
          <span className="radio-btn-label">2 Bedrooms</span>
        </span>
        <span className="radio-btn-container">
          <span className="radio-btn" />
          <span className="radio-btn-label">1 Bedroom</span>
        </span>
        <span className="radio-btn-container">
          <span className="radio-btn" />
          <span className="radio-btn-label">None</span>
        </span>
      </div>
    </div>
  );
}

export default BedRooms;
