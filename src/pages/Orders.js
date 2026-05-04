import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import { formatPrice, formatDate, getStatusColor } from '../utils/helpers';
import { ShoppingBagIcon, EyeIcon } from '@heroicons/react/solid';

const Orders = () => {
  const { user } = useAuth();
  const { orders } = useOrder();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Please Log In</h1>
          <p className="text-gray-600 mb-8">You need to be logged in to view your orders</p>
          <Link to="/auth/login" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
          <div className="text-center py-20">
            <ShoppingBagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Orders Yet</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Start shopping to see your orders here.
            </p>
            <Link to="/" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>

        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  {/* Order Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order {order.id}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>

                  {/* Status */}
                  <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm w-fit ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Order Items Preview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b">
                  {order.items.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  {order.items.length > 4 && (
                    <div className="flex items-center justify-center bg-gray-50 rounded">
                      <p className="text-sm font-medium text-gray-600">
                        +{order.items.length - 4} more
                      </p>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="text-gray-700">
                    <p className="text-sm">
                      <span className="font-medium">Total:</span> {formatPrice(order.total)}
                    </p>
                    {order.estimatedDelivery && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Est. Delivery:</span> {formatDate(order.estimatedDelivery)}
                      </p>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/orders/${order.id}`}
                    className="btn-primary flex items-center justify-center space-x-2 w-full md:w-auto"
                  >
                    <EyeIcon className="w-4 h-4" />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to shop more?</p>
          <Link to="/" className="btn-outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
