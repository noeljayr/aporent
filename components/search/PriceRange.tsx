"use client";

import "@/css/price-range.css";
import NumberFlow from "@number-flow/react";
import React, { useState, useRef, useEffect } from "react";
import useExandSearchStore from "@/context/expandSearch";
import { motion } from "framer-motion";

const PriceRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);
  const { expandSearch } = useExandSearchStore();
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [preferedInput, setPreferedInput] = useState("slider");

  const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

  const handleMouseDown = (handle: "min" | "max") => {
    setDragging(handle);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const newValue = min + (percentage / 100) * (max - min);

    if (dragging === "min") {
      const clampedValue = Math.min(newValue, maxVal);
      setMinVal(Math.max(clampedValue, min));
    } else {
      const clampedValue = Math.max(newValue, minVal);
      setMaxVal(Math.min(clampedValue, max));
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging, minVal, maxVal]);

  const minPos = getPercentage(minVal);
  const maxPos = getPercentage(maxVal);

  return (
    <div
      className={`rent-range-container flex-col gap-2  ${
        expandSearch ? "flex" : "hidden"
      }`}
    >
      <span className="label font-medium">Price range</span>
      <span className="range-input-options mb-2 flex justify-between w-full">
        <span
          onClick={() => {
            setPreferedInput("slider");
          }}
          className={`option flex gap-2 items-center ${
            preferedInput == "slider" ? "selected" : ""
          }`}
        >
          <span className="radio-btn" />
          <span className="option-label">Slider</span>
        </span>

        <span
          onClick={() => {
            setPreferedInput("custom");
          }}
          className={`option flex gap-2 items-center ${
            preferedInput == "custom" ? "selected" : ""
          }`}
        >
          <span className="radio-btn" />
          <span className="option-label"> Custom range</span>
        </span>
      </span>
      <div
        className={`rent-range ${
          preferedInput == "slider" ? "mt-8" : "mb-[2.5rem]"
        }`}
      >
        <div ref={sliderRef} className="slider">
          <motion.span
            style={{
              left: `${preferedInput == "slider" ? `calc(${minPos}% )` : "0"}`,
            }}
            layout="size"
            className={`range-value ${
              preferedInput == "slider" ? "top-[-2rem]" : "top-[1.5rem]"
            }`}
          >
            <span>K</span>{" "}
            <span>
              <NumberFlow
                value={minVal}
                format={{
                  maximumFractionDigits: 0,
                }}
              />
            </span>
          </motion.span>

          <span
            className="track"
            style={{
              left: `${minPos}%`,
              right: `${100 - maxPos}%`,
            }}
          />

          <span
            className="min-handle handle"
            onMouseDown={() => handleMouseDown("min")}
            onTouchStart={() => handleMouseDown("min")}
            style={{
              left: `${minPos + 2}%`,
            }}
          />

          <span
            className="max-handle handle"
            onMouseDown={() => handleMouseDown("max")}
            onTouchStart={() => handleMouseDown("max")}
            style={{
              left: `${maxPos - 2}%`,
            }}
          />

          <motion.span
            style={{
              left: `${
                preferedInput == "slider" ? `calc(${maxPos}% - 25%)` : "100%"
              }`,
              translate: `${preferedInput == "slider" ? `0` : "-100%"}`,
            }}
            layout="size"
            className={`range-value ${
              preferedInput == "slider" ? "top-[-2rem]" : "top-[1.5rem]"
            }`}
          >
            <span>K</span>{" "}
            <span className="grid w-auto">
              <NumberFlow
                className={`${preferedInput == "slider" ? "" : "hidden"}`}
                value={maxVal}
                format={{
                  maximumFractionDigits: 0,
                }}
              />

              <input
                className={`${preferedInput == "slider" ? "hidden" : "w-fit"}`}
                onChange={(e) => setMax(parseFloat(e.target.value))}
                type="text"
                value={max}
              />
            </span>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
