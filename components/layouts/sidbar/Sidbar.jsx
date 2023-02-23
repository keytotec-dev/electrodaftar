import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
export default function Sidbar() {
  const [tab, settab] = useState(false);
  const [sidbar, setSidbar] = useState(true);
  const siteSlice = useSelector((state) => state.siteSlice);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch({ type: "handle_sidbar" })}
      className={`${
        siteSlice.sidbar ? "block" : "hidden"
      } fixed w-full h-screen right-0 top-0 z-20 bg-[#6e6e6ec1]`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xs h-full bg-[#F6F6F6]"
      >
        <ul className="flex text-center">
          <li
            onClick={() => settab((prev) => !prev)}
            className={`flex-1 font-bold text-md ${
              tab ? "bg-[#FF7A09] text-white" : "text-gray-700"
            }  py-3 `}
          >
            منو
          </li>
          <li
            onClick={() => settab((prev) => !prev)}
            className={`flex-1 font-bold text-md ${
              tab ? "text-gray-700" : "bg-[#FF7A09] text-white"
            } py-3`}
          >
            حساب کاربری
          </li>
        </ul>

        {tab ? (
          <ul className="mt-8">
            <li className="py-3 pr-2 border">آموزش</li>
            <li className="py-3 pr-2 border">دسته بندی</li>
            <li className="py-3 pr-2 border">مقاله ها</li>
            <li className="py-3 pr-2 border">خبر ها</li>
          </ul>
        ) : (
          <ul className="mt-8">
            <li className="py-3 pr-2 border">تماس با ما</li>
            <li className="py-3 pr-2 border">ورود</li>
            <li className="py-3 pr-2 border">ثبت نام</li>
          </ul>
        )}
      </div>
    </div>
  );
}
