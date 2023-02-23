import React from "react";
import Image from "next/image";
import NewProductCard from "./newProductCard/NewProductCard";
export default function NewProducts() {
  return (
    <div className="relative ">
      <hr className="border border-[#FF7A09]" />
      <div className="absolute text-sm text-white bg-[#FF7A09] p-2">
        محصولات جدید
      </div>
      <div className="grid grid-cols-2 px-2 md:grid-cols-4 gap-2 md:gap-4 mt-10">
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <NewProductCard/>
        <div className="border col-span-1"></div>
        <div className="border col-span-1"></div>
      </div>
    </div>
  );
}
