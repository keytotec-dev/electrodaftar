import Image from "next/image";
import React from "react";
export default function SlidContent({ image }) {
  return (
    <div className="mx-2">
        {/* <img style={{
            height:400
        }} className="w-full rounded-md" src={image} alt="" /> */}
        <Image className="w-full" width={400} height={400} src={image}/>
    </div>
  );
}
