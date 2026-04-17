import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft, FiHeart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import products from "../data/products";

// 1. Import Redux hooks and your action
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Find product by ID from the URL
const product = products.find((p) => p._id === _id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary-dark">
          Product Not Found
        </h2>
        <Link
          to="/shop"
          className="text-gray-500 font-semibold underline decoration-2 underline-offset-4 hover:text-black transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  // 2. Create the Handle Add to Cart function
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      console.log("Added to cart successfully");
    }
  };

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) =>
        i < Math.floor(rating) ? (
          <AiFillStar
            key={i}
            className="text-yellow-400 text-sm md:text-base"
          />
        ) : (
          <AiOutlineStar
            key={i}
            className="text-gray-300 text-sm md:text-base"
          />
        ),
      )}
      <span className="text-[10px] md:text-xs text-gray-400 ml-2 font-bold tracking-wider uppercase">
        ({rating} Reviews)
      </span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
      {/* Navigation Breadcrumb */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-6 md:mb-10 transition-colors text-sm font-bold uppercase tracking-widest group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Shop</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: Product Image */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-square sm:aspect-4/5 md:aspect-square shadow-sm">
          {product.oldPrice && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-extrabold px-3 py-1 rounded z-10 shadow-sm">
              SALE
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col">
          <p className="text-[10px] md:text-xs uppercase text-gray-400 tracking-[0.25em] font-extrabold mb-3">
            {product.category}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark mb-3 leading-tight">
            {product.name}
          </h1>

          <div className="mb-6">{renderStars(product.rating)}</div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl md:text-3xl font-bold text-primary-dark">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through decoration-1">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-prose">
            {product.description}
          </p>

          <div className="space-y-8">
            {/* Color Display */}
            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest mb-4 text-primary-dark">
                Color:{" "}
                <span className="text-gray-400 font-medium ml-1 capitalize">
                  {product.color}
                </span>
              </h4>
              <div
                className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-black"
                style={{ backgroundColor: product.color }}
              />
            </div>

            {/* CTA Section - Responsive Mobile Buttons */}
            <div className="flex flex-col gap-4">
              {/* Quantity Selector - Full width on mobile */}
              <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 sm:w-36">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-400 hover:text-black transition-colors"
                >
                  −
                </button>
                <span className="font-bold text-primary-dark tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-400 hover:text-black transition-colors"
                >
                  +
                </button>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-3 h-14">
                <button onClick={handleAddToCart} className="flex-4 h-full bg-black text-white rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-[0.97] shadow-lg shadow-gray-200">
                  <FiShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>

                <button className="flex-1 h-full flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition-all active:scale-[0.97]">
                  <FiHeart size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-x-10 gap-y-3">
            <div className="text-[10px] font-bold text-gray-400 tracking-wider">
              SKU:{" "}
              <span className="text-primary-dark ml-1">
                PRD-{product._id.toString().padStart(4, "0")}
              </span>
            </div>
            <div className="text-[10px] font-bold text-gray-400 tracking-wider">
              CATEGORY:{" "}
              <span className="text-primary-dark ml-1 uppercase">
                {product.category}
              </span>
            </div>
            {product.author && (
              <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                Vendor:{" "}
                <span className="text-primary-dark ml-1">{product.author}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
