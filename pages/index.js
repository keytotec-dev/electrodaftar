import React from "react";
import Header from "../components/layouts/header/Header";
import MainSlider from "../components/slider/MainSlider";
import NewArticles from "../components/newArticles/NewArticles";
import NewProducts from "../components/newProducts/NewProducts";
import Footer from "../components/layouts/footer/Footer";
import Sidbar from "../components/layouts/sidbar/Sidbar";
export default function Home() {
    return (
        <div className="w-full">
            <Header />
            <Sidbar />
            <main className='w-full mt-20 shadow md:mt-28'>
                <section className='grid grid-cols-10 mx-2'>
                    <div className='col-span-7 md:col-span-8  border'>
                        <MainSlider />
                        <NewProducts />
                        
                        
                    </div>
                    <div className='col-span-3 md:col-span-2 border h-screen overflow-y-scroll'>
                        <NewArticles />
                    </div>
                    <div className='relative mt-12'>
                            
                            <hr className='border border-[#FF7A09]' />
                            <div className='absolute text-sm text-white bg-[#FF7A09] p-2'>محصولات منتخب</div>

                        </div>


                </section>


                {/* <div style={{
                    height: 300
                }} className='w-full mx-auto flex'>
                    <MainSlider />
                    <NewArticles />
                </div> */}
            </main>
            <Footer />
        </div>
    );
}