import React from 'react'
import bannerimg from '../assets/header.png'

const Banner = () => {
  return (
    <section className="bg-primary-dark max-h-150  flex items-center overflow-hidden relative">
      <div className="container mx-auto max-w-300 px-4 md:px-6 flex flex-col md:flex-row items-center h-full gap-8 md:gap-10 py-12 md:py-0 z-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left z-20">
          <h4 className="font-poppins font-semibold text-primary-light uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base">
            UP TO 20% Discount on
          </h4>
          
          <h1 className="font-playfair font-black text-white text-5xl sm:text-6xl md:text-5xl lg:text-7xl leading-tight">
            Girl's Fashion
          </h1>

          <div className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40 -z-1">
             <img 
              src={bannerimg} 
              alt="Background Decorative" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Discover the latest trends and express your unique style with our Women's fashion website. Explore a curated collection of clothing, accessories, and footwares that caters to every taste and occasion.
          </p>
          
          <button className="bg-white text-primary-dark font-poppins font-bold uppercase px-8 md:px-10 py-3 md:py-4 tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-primary-light cursor-pointer shadow-lg active:scale-95">
            Explore Now
          </button>
        </div>

        {/* Right Content: Visible only from Tablet (md) upwards in the side column */}
        <div className="hidden md:flex flex-1 h-full justify-center md:justify-end">
          <img 
            src={bannerimg} 
            alt="Girl's Fashion Header" 
            className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
        </div>

      </div>
    </section>
  )
}

export default Banner
