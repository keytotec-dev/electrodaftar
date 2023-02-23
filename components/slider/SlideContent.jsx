import Image from "next/image";
import React from "react";
import slid1 from '../../public/images/mainslider/product.jpg'
export default function SlidContent({ image }) {
  return (
    <div className="mx-2">
        {/* <img style={{
            height:400
        }} className="w-full rounded-md" src={image} alt="" /> */}
        <Image className="md:w-1/4" width={400} height={400} src={slid1}/>
    </div>
  );
}
