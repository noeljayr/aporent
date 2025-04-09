"use client";

import useSelectedPropertyStore from "@/context/selectedProperty";
import { PropertyTypes } from "@/types/propertyTypes";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";

function Property(props: PropertyTypes) {
  const { setSelectedId, selectedId, setExpandProperty } =
    useSelectedPropertyStore();

  const selectProperty = (id: string) => {
    if (selectedId == id) {
      setExpandProperty(false);
      setSelectedId(null);
    } else {
      setExpandProperty(true);
      setSelectedId(props.property_id);
    }
  };

  const getCoverImage = (images: string[]) => {
    if (images.length > 0) {
      return images[0];
    }
  };

  return (
    <div
      className={`property gap-1 flex flex-col overflow-hidden relative ${props.className}`}
    >
      <div className="status-bar flex absolute w-full">
        <span className="like-btn ml-auto flex items-center justify-center">
          <IconHeart />
        </span>
      </div>
      <Image
        className="property-image"
        src={`/property-images/${props.images[0]}`}
        alt={props.title}
        width={500}
        height={300}
        onClick={() => {
          selectProperty(props.property_id);
        }}
      />
      <span
        onClick={() => {
          selectProperty(props.property_id);
        }}
        className="title cursor-pointer mx-[2px] font-medium mt-1"
      >
        {props.title}
      </span>
      <span className="location mx-[2px] opacity-80">{props.location}</span>
      <div className="features mx-[2px] overflow-x-auto hide-scrollbar grid gap-2">
        {props.features.map(
          (feature, index) =>
            index < 3 && (
              <span key={index} className="feature font-medium">
                <span className="">{feature}</span>
              </span>
            )
        )}
      </div>
      <div className="rent mx-[2px] mt-2 flex gap-2 items-center">
        <span className="price font-medium">
          K {formatAmountWithCommas(props.price.toString())}
        </span>
        <span className="seperator opacity-25 font-extrabold">•</span>
        <span className="frequency opacity-80">{props.paymentFrequency}</span>

       
      </div>
    </div>
  );
}

export default Property;
