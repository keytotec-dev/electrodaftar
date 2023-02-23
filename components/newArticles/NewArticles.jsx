import React from "react";

import NewArticleCard from "./newArticleCard/NewArticleCard";
export default function NewArticles() {
  return (
    <div className="relative flex-1">
      <hr className="border-1 border-[#FF7A09]" />
        <div className="absolute text-white text-xs font-bold p-1 top-0 right-0 bg-[#FF7A09]"> مقاله های جدید</div>
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />
      <NewArticleCard/>
      <hr className='border-1 mx-2  border-[#c1c1c2]' />

      
    </div>
  );
}
