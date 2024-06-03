"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState } from "react";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = (useState < null) | (number > null);

  return (
    <>
      <div className="flex gap-4 h-full"></div>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const inOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </>
  );
};

export default NavItems;
