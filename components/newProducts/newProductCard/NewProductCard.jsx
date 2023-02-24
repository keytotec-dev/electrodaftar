import React from "react";
import Image from "next/image";
import proImage from '../../../public/images/mainslider/product2.jpg'
import styles from './newProductcard.module.css'
export default function NewProductCard() {
  return (
    <div className={`${styles.newProductcard} col-span-1 border rounded-lg`}>
      <Image className={`${styles.productimg} w-4/5 p-2 mx-auto`} src={proImage} />
      <div className="mt-4 px-2">
        <h1 className="text-md text-gray-600 font-bold">کنتاکتور سه فاز</h1>
        <p className="mt-3 mb-4 text-sm leading-normal">نمایندگی فروش انواع کنتاکتور اشنایدر (Schneider) اصل،</p>
      </div>
    </div>
  );
}
