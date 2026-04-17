import React from "react";
// 1. Added IoTrashOutline icon
import { IoCloseOutline, IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
// 2. Imported removeProduct action
import { updateQuantity, removeProduct } from "../redux/features/cart/cartSlice";
import OrderSummary from "./OrderSummary"; 

const CartModal = ({ products, totalPrice, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantity = (id, type) => {
    dispatch(updateQuantity({ _id: id, type }));
  };

  const handleRemoveItem = (e, id) => {
    e.preventDefault();
    dispatch(removeProduct(id));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-90 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-100 bg-white shadow-2xl z-100 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Your Cart</h2>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{products.length} Items</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full group">
              <IoCloseOutline size={28} className="text-gray-400 group-hover:text-black" />
            </button>
          </div>

          {/* Cart Items Section */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {products.length > 0 ? (
              products.map((item) => (
                <div key={item._id} className="flex gap-4 items-center">
                  <div className="h-20 w-20 bg-gray-50 rounded-lg shrink-0 overflow-hidden border border-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-3">${item.price}</p>

                    <div className="flex items-center w-max border border-gray-200 rounded">
                      <button onClick={() => handleQuantity(item._id, 'decrement')} className="p-1 px-2 hover:bg-gray-50 disabled:opacity-30" disabled={item.quantity <= 1}>
                        <IoRemoveOutline size={14} />
                      </button>
                      <span className="px-2 text-xs font-bold text-gray-900 min-w-6 text-center">{item.quantity}</span>
                      <button onClick={() => handleQuantity(item._id, 'increment')} className="p-1 px-2 hover:bg-gray-50">
                        <IoAddOutline size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="font-bold text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={(e) => handleRemoveItem(e, item._id)}
                      className="text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1 transition-colors pt-8"
                    >
                      <IoTrashOutline size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-10 italic">Your cart is currently empty.</p>
            )}
          </div>

          <OrderSummary products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
};

export default CartModal;
