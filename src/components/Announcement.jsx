import React, { useState, useEffect } from "react";
import bannerimg from '../assets/header.png'

const Announcement = () => {
  // Cloned Data Mockup
  const announcementData = {
    image: bannerimg,
    title: "Grand Summer Sale",
    subtitle: "Exclusive Announcement",
    description: "Elevate your wardrobe with our curated seasonal picks. Experience luxury fashion at its finest with our limited-time price reductions.",
    expiryDate: "2026-08-25 14:00:00",
  };

  const [info, setInfo] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setInfo(announcementData);
  }, []);

  useEffect(() => {
    if (!info) return;

    const timer = setInterval(() => {
      const distance = new Date(info.expiryDate.replace(/-/g, "/")) - new Date();

      if (distance < 0) {
        clearInterval(timer);
      } else {
        // Shorter, easier way to write timing logic
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [info]);

  if (!info) return null;

  return (
    <section className="bg-[#F9F8F6]"> 
      <div className="container mx-auto px-4 max-w-300 py-16">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100">
          
          <div className="w-full md:w-1/2 h-80 md:h-137 bg-[#EAE8E4] flex items-center justify-center p-6 md:p-12">
            <img src={info.image} alt="Promo" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20">
            <h4 className="text-black font-bold uppercase tracking-[0.4em]  text-[12px] mb-4">{info.subtitle}</h4>
            <h1 className="text-primary-dark text-4xl md:text-5xl lg:text-6xl font-playfair font-black mb-6 leading-tight">{info.title}</h1>
            <p className="text-gray-500 font-poppins text-sm md:text-base mb-10 max-w-sm leading-relaxed">{info.description}</p>

            <div className="flex justify-between md:justify-start gap-4 lg:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="text-primary-dark text-2xl md:text-4xl font-playfair font-bold">{String(value).padStart(2, "0")}</div>
                  <div className="h-0.5 w-4 bg-primary-light my-2"></div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{unit}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-primary-dark text-white font-poppins font-bold uppercase px-12 py-4 tracking-widest text-xs transition-all hover:bg-primary-light shadow-lg active:scale-95">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
