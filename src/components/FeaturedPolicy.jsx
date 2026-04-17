import React from 'react';
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiTruck, FiRotateCcw, FiHeadphones} from 'react-icons/fi';

const FeaturedPolicy = () => {
    const services = [
        {
            id: 1,
            icon: <FiTruck className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Fast Delivery",
            description: "Free shipping on all orders over $150"
        },
        {
            id: 2,
            icon: <FiRotateCcw className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Return Guaranteed",
            description: "30-day money-back guarantee"
        },
        {
            id: 3,
            icon: <FiHeadphones className="w-8 h-8 md:w-10 md:h-10" />,
            title: "24/7 Support",
            description: "Dedicated support anytime you need"
        },
        {
            id: 4,
            icon: <RiSecurePaymentLine  className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Secure Payment",
            description: "100% secure payment methods"
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto max-w-300 px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {services.map((service) => (
                        <div 
                            key={service.id} 
                            className="flex flex-col items-center text-center space-y-4 group"
                        >
                            {/* Icon Container */}
                            <div className="text-primary-light transition-transform duration-300 group-hover:-translate-y-2">
                                {service.icon}
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-1">
                                <h4 className="font-poppins font-bold text-primary-dark text-lg md:text-xl">
                                    {service.title}
                                </h4>
                                <p className="font-poppins text-gray-500 text-sm md:text-base max-w-50 mx-auto leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            
                            {/* Decorative underline on hover */}
                            <div className="h-0.5 w-0 bg-primary-light transition-all duration-300 group-hover:w-12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPolicy;
