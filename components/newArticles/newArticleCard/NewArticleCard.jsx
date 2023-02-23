import React from 'react'
import Image from "next/image";
import articleImage from "../../../public/images/mainslider/product.jpg";
import { FaStar } from "react-icons/fa";
export default function NewArticleCard() {
  return (
    <div className="md:flex gap-2 mt-2 pl-1">
        <Image
          className="w-full h-24 object-fill"
          width={100}
          height={50}
          src={articleImage}
          alt=""
        />
        <div className="md:flex flex-col justify-between w-full p-1">
          <h1 className="text-sm md:text-md font-extrabold text-[#1C1C1C]">لورم ایپسوم متن ساختگی با تولید</h1>
          <div>
            <div className="flex mt-2">
              <FaStar color="#F3B60A" />
              <FaStar color="#F3B60A" />
              <FaStar color="#F3B60A" />
              <FaStar color="#F3B60A" />
              <FaStar color="#F3B60A" />
            </div>
            <div className="text-left">
              <span className="text-xs text-[#9999B5] font-bold ">15 آذر 1401</span>
            </div>
          </div>
        </div>
      </div>
  )
}
