import React from 'react'
import { Link } from "react-router-dom"
import card1 from '../assets/header.png'

const HeroSection = () => {

    const cards = [
        {
            id: 1,
            image: card1,
            trend: '2026 Trend',
            title: "Women's Shirt",
            bgColor: "bg-[#fdf2f8]" // Soft Pink tint
        },
        {
            id: 2,
            image: card1,
            trend: '2026 Trend',
            title: "Women's Shirt",
            bgColor: "bg-[#f0fdf4]" // Soft Mint tint
        },
        {
            id: 3,
            image: card1,
            trend: '2026 Trend',
            title: "Women's Shirt",
            bgColor: "bg-[#eff6ff]" // Soft Blue tint
        }
    ]

    return (
        /* Enhanced Background: Gradient with a subtle decorative glow */
        <section className="py-16 relative overflow-hidden bg-[#fafaf9]">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-light/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-200/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-300 px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div 
                            key={card.id} 
                            className={`group flex items-center ${card.bgColor} rounded-2xl overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-white/50`}
                        >
                            {/* Left: Image Side */}
                            <div className="w-2/5 h-36 overflow-hidden relative">
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="w-full h-full object-contain p-3  " 
                                />
                            </div>

                            {/* Right: Content Side */}
                            <div className="w-3/5 p-5">
                                <span className="inline-block px-2 py-0.5 bg-white/80 rounded text-[9px] uppercase tracking-widest text-primary-dark font-bold mb-2 shadow-sm">
                                    {card.trend}
                                </span>
                                <h4 className="font-playfair font-black text-primary-dark text-xl mb-4">
                                    {card.title}
                                </h4>
                                <Link 
                                    to="/" 
                                    className="inline-flex items-center text-[11px] font-poppins font-bold uppercase tracking-tighter text-primary-dark transition-colors"
                                >
                                    Discover More
                                    <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
