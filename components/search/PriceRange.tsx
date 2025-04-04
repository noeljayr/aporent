"use client";

import "@/css/search/price-range.css";
import NumberFlow from "@number-flow/react";
import React, { useState, useRef, useEffect } from "react";
import useExandSearchStore from "@/context/expandSearch";
import { motion } from "framer-motion";
import { formatAmountWithCommas } from "@/utils/formatNumber";

const PriceRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);
  const { expandSearch } = useExandSearchStore();
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [preferedInput, setPreferedInput] = useState("slider");
  const minSpanRef = useRef<HTMLSpanElement>(null);
  const maxSpanRef = useRef<HTMLSpanElement>(null);
  const [minInputWidth, setMinInputWidth] = useState(2);
  const [maxInputWidth, setMaxInputWidth] = useState(2);

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

  const handleMinInput = (e: React.FormEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    text = text.replace(/\D/g, "");

    let num = parseInt(text, 10) || 0;

    if (num < 0 || num.toString().length <= 0) {
      num = 0;
    }

    if (num > maxVal) {
      num = maxVal / 1.25;
    }

    setMinVal(num);
    setMin(num);
  };

  const handleMaxInput = (e: React.FormEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    text = text.replace(/\D/g, "");

    let num = parseInt(text, 10) || 0;

    setMaxVal(num);
    setMax(num);
  };

  useEffect(() => {
    if (minSpanRef.current) {
      const widthPx = minSpanRef.current.offsetWidth;
      const widthRem = widthPx / 16;
      setMinInputWidth(widthRem + 0.5);
    }
  }, [minVal]);

  useEffect(() => {
    if (maxSpanRef.current) {
      const widthPx = maxSpanRef.current.offsetWidth;
      let widthRem = widthPx / 16;
      widthRem < 1.5 ? (widthRem = 4) : widthRem;
      setMaxInputWidth(widthRem + 0.5);
    }
  }, [maxVal]);

  return (
    <div
      className={`rent-range-container flex-col gap-2 p-2  ${
        expandSearch ? "flex" : "hidden"
      }`}
    >
      <span className="label font-medium">Price range</span>
      <span className="range-input-options mb-2 flex justify-between w-full">
        <span
          onClick={() => {
            setPreferedInput("slider");
          }}
          className={`radio-btn-container ${
            preferedInput == "slider" ? "selected-radio-btn" : ""
          }`}
        >
          <span className="radio-btn" />
          <span className="radio-btn-label">Slider</span>
        </span>

        <span
          onClick={() => {
            setPreferedInput("custom");
          }}
          className={`radio-btn-container ${
            preferedInput == "custom" ? "selected" : ""
          }`}
        >
          <span className="radio-btn" />
          <span className="radio-btn-label"> Custom range</span>
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
            <span className="grid w-auto">
              <NumberFlow
                className={`${preferedInput == "slider" ? "" : "hidden"}`}
                value={minVal}
                format={{
                  maximumFractionDigits: 0,
                }}
              />
              <span
                className={`relative range-input ${
                  preferedInput == "slider" ? "hidden" : "flex"
                }`}
              >
                <input
                  type="text"
                  value={formatAmountWithCommas(minVal.toFixed(0))}
                  onChange={handleMinInput}
                  style={{
                    overflow: "visible",
                    height: "1.5rem",
                    width:
                      minVal.toString().length < 3
                        ? `0.9rem`
                        : `calc(${minInputWidth}rem - 0.75rem)`,
                  }}
                />

                <span
                  ref={minSpanRef}
                  style={{
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                  }}
                >
                  {formatAmountWithCommas(minVal.toFixed(0)) || " "}
                </span>
              </span>
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
              left: `${minPos + 2.35}%`,
            }}
          />

          <span
            className="max-handle handle"
            onMouseDown={() => handleMouseDown("max")}
            onTouchStart={() => handleMouseDown("max")}
            style={{
              left: `${maxPos - 2.25}%`,
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
            <span>K</span>
            <span className="grid w-auto">
              <NumberFlow
                className={`${preferedInput == "slider" ? "" : "hidden"}`}
                value={maxVal}
                format={{
                  maximumFractionDigits: 0,
                }}
              />

              <span
                className={`relative range-input ${
                  preferedInput == "slider" ? "hidden" : "flex"
                }`}
              >
                <input
                  type="text"
                  value={formatAmountWithCommas(maxVal.toFixed(0))}
                  onChange={handleMaxInput}
                  onBlur={(e) => {
                    let num = parseInt(e.currentTarget.value)
                    if (num < 10000) {
                      num = 10000;
                    }
                    if (num < minVal) {
                      num = minVal * 1.25;
                    }

                    setMaxVal(num);
                    setMax(num);
                  }}


                  style={{
                    overflow: "visible",
                    height: "1.5rem",
                    width:
                      maxVal.toString().length < 3
                        ? `0.9rem`
                        : `calc(${maxInputWidth}rem - 1rem)`,
                  }}
                />

                <span
                  ref={maxSpanRef}
                  style={{
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                  }}
                >
                  {formatAmountWithCommas(maxVal.toFixed(0)) || " "}
                </span>
              </span>
            </span>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
