import React from "react";
import { Link } from "react-router-dom";

import category1 from "../assets/category-1.jpg";
import category2 from "../assets/category-2.jpg";
import category3 from "../assets/category-3.jpg";
import category4 from "../assets/category-4.jpg";

const Categories = () => {
  const categories = [
    { name: "HandBags", path: "hand-bags", image: category1 },
    { name: "Jackets", path: "jacket", image: category2 },
    { name: "Backpacks", path: "backpacks", image: category3 },
    { name: "Belts", path: "belts", image: category4 },
    { name: "Ready-to-Wear", path: "ready-to-wear", image: category1 },
  ];

  return (    
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-300 px-4 md:px-6">
        <div className="mb-5 text-center md:text-left">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-primary-dark">
            Shop by Category
          </h2>
          <div className="h-1 w-20 bg-primary-light mt-1 mx-auto md:mx-0"></div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto pb-4 xl:pb-0 xl:grid xl:grid-cols-5 gap-3 md:gap-6 scrollbar-hide">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category.path}`}
              className="group relative block max-w-32.5 md:max-w-45 xl:max-w-full aspect-square xl:aspect-3/4 overflow-hidden rounded-lg bg-gray-100 shadow-sm shrink-0"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-3 md:p-5 transform translate-y-0 xl:translate-y-4 xl:group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-poppins font-bold text-white text-xs md:text-sm xl:text-xl leading-tight">
                  {category.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
