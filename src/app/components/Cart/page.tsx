"use client";
import { useCart } from "../../contexts/CartContext";
import { useState } from 'react';

interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
  const [message, setMessage] =useState<string | null>(null);
  if (!isCartOpen) {
    return null;
  }
  const handleCheckout = () => {
    clearCart();
    setMessage("Purchase successful!");
  };
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white border-l p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.quantity} x ${item.price}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="text-sm bg-blue-600 py-1 px-2 rounded hover:bg-blue-500"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <p className="text-sm text-gray-500" data-testid="quantity">
                  {item.quantity}
                </p>
                <button
                  className="text-sm bg-blue-600 py-1 px-2 rounded hover:bg-blue-500"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              className="text-sm text-red-500 underline"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
          <hr className="my-4" />
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-2xl font-semibold text-gray-900">Total</h2>
        <p className="text-2xl font-semibold text-gray-900">
          ${totalCost.toFixed(2)}
        </p>
      </div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
        onClick={handleCheckout}
      >
        Checkout
      </button>
      {message && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4"
          role="alert"
        >
          {message}
        </div>
      )}
      <button
        className="mt-4 w-full bg-red-600 py-3 rounded-lg hover:bg-red-500"
        onClick={closeCart}
      >
        Close
      </button>
    </div>
  );
};
export default Cart;
