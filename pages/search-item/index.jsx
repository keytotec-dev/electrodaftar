import React from 'react'
import {FaSearch} from 'react-icons/fa'
import MobileHeader from '../../components/layouts/mobileHeader/mobileHeader'
export default function search() {
  return (
    <div className='w-full'>
        <MobileHeader/>
        <div className='mt-4 mx-4'>
            <div className='w-full h-12 border flex gap-2 items-center px-2'>
                <FaSearch size={26} color='#FF7A09'/>
                <input className='w-full h-full outline-none text-lg' type="text" placeholder='جستجوی کالا ، مقاله و ...' />
            </div>

        </div>

    </div>
  )
}
