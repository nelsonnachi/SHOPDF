import React from "react";

const OrderSummary = ({ products, totalPrice }) => {
  return (
    <div className="p-6 border-t border-gray-100 bg-gray-50/50">
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Subtotal</span>
          <span className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
          Shipping and taxes calculated at checkout
        </p>
      </div>

      <button 
        disabled={products.length === 0}
        className="w-full bg-black text-white py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
