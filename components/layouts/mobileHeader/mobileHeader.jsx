import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { useRouter } from 'next/router'
export default function MobileHeader() {

    const router = useRouter()

  return (
    <div className='py-4 flex items-center gap-3 px-4 shadow-lg bg-white '>
        <FaArrowRight onClick={()=>router.back()} size={24}/>
        <h1 className='font-bold text-lg'>جستجو</h1>
    </div>
  )
}
