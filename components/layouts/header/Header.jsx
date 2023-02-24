import React from "react";
import styles from './header.module.css'
import {
  FaShoppingBasket,
  FaSearch,
  FaChevronDown,
  FaListUl,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.headerStyles} w-full fixed z-10 top-0 px-4 py-2 bg-white sm:shadow-md`}>
      <div className="w-full flex items-center justify-between ">
        <div className="flex flex-1 items-center gap-4">
          <img
            width={150}
            src="https://thecaferobot.com/store/pub/media/logo/stores/1/cafe-robot-logo-new-color-dark-small.png"
            alt=""
          />
          <div className="w-3/5 hidden sm:flex items-center px-2 py-1 gap-4 border rounded-md">
            <FaSearch color="#333333" />
            <input
              className="w-full text-gray-600 font outline-none h-full text-lg"
              type="text"
              placeholder="جستجوی کالا،دسته بندی"
            />
          </div>
        </div>
        <div className="flex sm:hidden items-center gap-3">
          <Link href="/search-item">
            <FaSearch color="#333333" size={20} />
          </Link>
          <FaListUl
            onClick={() =>
              dispatch({
                type: "handle_sidbar",
              })
            }
            color="#333333"
            size={20}
          />
          <FaShoppingBasket size={25} color="#FF7A09" />
          <FaChevronDown color="#333333" size={10} />
        </div>
        <div className="hidden  sm:flex items-center gap-2">
          <div className={`${styles.signbtns} px-3 font-bold text-xs flex items-center gap-1 text-gray-600 border rounded-md py-2`}>
            <FaSignInAlt />
            <h1>ورود</h1>
          </div>
          <div className={`${styles.signbtns} px-3 font-bold text-xs flex items-center gap-1 text-gray-600 border rounded-md py-2`}>
            <FaUserPlus />
            <span>ثبت نام</span>
          </div>
          <hr className="w-6 border rotate-90" />
          <FaShoppingBasket size={25} color="#FF7A09" />
          <FaChevronDown color="gray" size={13} />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between">
          <ul className="flex gap-6 items-center">
            <li className={`${styles.navbarstyle} font-bold py-2`}>دسته بندی ها </li>
            <li className={`${styles.navbarstyle} font-bold py-2`}>آموزش</li>
            <li className={`${styles.navbarstyle} font-bold py-2`}>محصولات</li>
            <li className={`${styles.navbarstyle} font-bold py-2`}>مقاله ها</li>
          </ul>
          <ul className="flex gap-4 items-center">
            <li>درباره ما </li>
            <li>سوالی دارید</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
