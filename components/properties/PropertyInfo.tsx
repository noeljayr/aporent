import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

interface Property {
  features: string[];
  description: string;
}

interface InfoTabsProps {
  property: Property;
}

const PropertyInfo: React.FC<InfoTabsProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="info w-full grid overflow-hidden">
      {/* Tabs */}
      <div className="tabs w-full grid grid-cols-2">
        <span
          onClick={() => handleTabClick(0)}
          className={`text-center font-semibold cursor-pointer py-2 ${
            activeTab === 0 ? "active-tab" : ""
          }`}
        >
          Overview
        </span>
        <span
          onClick={() => handleTabClick(1)}
          className={`text-center font-semibold cursor-pointer py-2 ${
            activeTab === 1 ? "active-tab" : ""
          }`}
        >
          Description
        </span>
      </div>

      {/* Swiper Container */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
        allowTouchMove={true} // Enable swiping on touch devices
      >
        <SwiperSlide>
          <div className="flex overview pt-3 overflow-y-auto flex-wrap items-start justify-start w-full h-full">
            <div className="flex flex-wrap h-fit gap-1">
              {property.features.map((feature, index) => (
                <span key={index} className="feature">
                  <span>{feature}</span>
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="description h-full overflow-y-auto flex flex-col py-2">
            <p>{property.description}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertyInfo;
