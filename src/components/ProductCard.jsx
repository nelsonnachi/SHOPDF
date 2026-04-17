import React from "react";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

// 1. Import useDispatch and your action
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(totalStars)].map((_, index) =>
          index < Math.floor(rating) ? (
            <AiFillStar
              key={index}
              className="text-yellow-400 text-xs md:text-sm"
            />
          ) : (
            <AiOutlineStar
              key={index}
              className="text-gray-300 text-xs md:text-sm"
            />
          ),
        )}
      </div>
    );
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents clicking the button from triggering the Link
    // 3. Dispatch the product object to the store
    dispatch(addToCart(product));
  };

  return (
    <div className="group flex flex-col h-full cursor-pointer">
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-gray-50 mb-4">
        {product.oldPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded z-10">
            SALE
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* View Details Overlay: Bottom on mobile, Center on desktop */}
        <div className="absolute inset-0 bg-black/5 md:bg-black/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center md:items-center pb-4 md:pb-0 z-20">
          <Link
            to={`/shop/${product._id}`}
            className="bg-white text-primary-dark px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all shadow-md"
          >
            <FiEye size={14} /> View Details
          </Link>
        </div>

        <div className="absolute top-3 right-3 z-30">
          <button
            onClick={handleAddToCart}
            className="bg-primary-dark text-white p-2.5 md:p-3 rounded-full shadow-lg hover:bg-primary-light transition-all transform active:scale-90"
          >
            <FiShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col grow">
        <p className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-[0.2em] font-bold mb-1">
          {product.category}
        </p>
        <Link to={`/shop/${product._id}`}>
          <h4 className="font-poppins font-semibold text-primary-dark text-sm md:text-base mb-2 line-clamp-1 hover:text-gray-500 transition-colors">
            {product.name}
          </h4>
        </Link>
        <div className="space-y-2 mt-auto">
          {renderStars(product.rating)}
          <div className="flex items-center gap-2">
            <span className="text-primary-dark font-bold text-sm md:text-base">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-[10px] md:text-xs">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
