import React from "react";
import Image from "next/image";
import proImage from '../../../public/images/mainslider/product2.jpg'

export default function NewProductCard() {
  return (
    <div className="shadow-lg col-span-1 rounded-lg">
      <Image className="w-4/5 mx-auto" src={proImage} />
      <div className="mt-4 px-1">
        <h1 className="text-sm text-gray-600 font-bold">کنتاکتور سه فاز</h1>
        <p>کنتاکتور سه فاز شرکت زیمنس</p>
      </div>
    </div>
  );
}
