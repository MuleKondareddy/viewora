import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/mockData';
import { CheckIcon, TruckIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/outline';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Shopping
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:text-primary transition"
          >
            ← Back to Products
          </button>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} out of 5 ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="border-t border-b py-6">
              <p className="text-gray-600 text-sm mb-2">Price</p>
              <p className="text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="text-sm">
                <strong>Material:</strong> {product.details.material}
              </p>
              <p className="text-sm">
                <strong>Protection:</strong> {product.details.protection}
              </p>
            </div>

            {/* Stock and Actions */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span
                  className={`text-sm font-semibold ${
                    product.stock > 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : 'Out of stock'}
                </span>
              </div>

              {/* Quantity Selector */}
              {product.stock > 0 && (
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-semibold text-gray-900">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 text-gray-900 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                  addedToCart
                    ? 'bg-green-600'
                    : 'btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              <button
                onClick={() => navigate('/')}
                className="w-full btn-outline"
              >
                Continue Shopping
              </button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <TruckIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-600">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Guaranteed Safe</p>
                  <p className="text-xs text-gray-600">Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
