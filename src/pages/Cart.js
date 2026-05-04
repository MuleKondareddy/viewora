import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../utils/helpers';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <ShoppingBagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!user) {
      navigate('/auth/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex gap-4 p-6 ${
                    index !== cart.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                    <p className="text-primary font-bold text-lg">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center border border-gray-300 rounded-lg h-fit">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-right">
                    <p className="text-gray-600 text-sm mb-4">Subtotal</p>
                    <p className="font-bold text-gray-900 text-lg">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded transition"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 btn-secondary"
            >
              Continue Shopping
            </button>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>{formatPrice(getCartTotal() * 0.08)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(getCartTotal() * 1.08)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full btn-primary mb-3"
              >
                Proceed to Checkout
              </button>

              <div className="space-y-2 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  ✓ Secure Checkout
                </p>
                <p className="text-xs text-gray-600">
                  ✓ Free Returns within 30 days
                </p>
                <p className="text-xs text-gray-600">
                  ✓ 100% Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
