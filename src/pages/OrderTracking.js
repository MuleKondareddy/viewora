import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { formatPrice, formatDate, getStatusColor } from '../utils/helpers';
import { CheckCircleIcon } from '@heroicons/react/solid';

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { getTrackingInfo } = useOrder();
  const trackingInfo = getTrackingInfo(orderId);

  if (!trackingInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <button
            onClick={() => navigate('/orders')}
            className="btn-primary"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  const { order, statusSteps, currentStep } = trackingInfo;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={() => navigate('/orders')}
            className="text-accent hover:text-primary transition"
          >
            ← Back to Orders
          </button>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Order #{order.id}
              </h1>
              <p className="text-gray-600">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Tracking</h2>
            <div className="space-y-6">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-green-100'
                      : 'bg-gray-200'
                  }`}>
                    {index <= currentStep ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    )}
                  </div>
                  {index < statusSteps.length - 1 && (
                    <div className={`absolute ml-5 mt-10 h-8 w-1 ${
                      index < currentStep ? 'bg-green-200' : 'bg-gray-200'
                    }`}></div>
                  )}
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {step.label}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {formatDate(step.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Delivery */}
          {order.status !== 'Delivered' && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Estimated Delivery:</strong> {formatDate(order.estimatedDelivery)}
              </p>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Tracking Number:</strong> {order.trackingNumber}
              </p>
            </div>
          )}
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Items */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Items</h2>
            <div className="space-y-4">
              {order.items.map(item => (
                <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment Info */}
          <div className="space-y-8">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Address
              </h2>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                <p>{order.shippingInfo.street}</p>
                <p>{order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.zip}</p>
                <p>{order.shippingInfo.country}</p>
                <p className="pt-2 border-t">{order.shippingInfo.email}</p>
                <p>{order.shippingInfo.phone}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="text-gray-700 space-y-1 text-sm">
                <p><strong>{order.paymentInfo.method}</strong></p>
                <p>Card ending in {order.paymentInfo.lastFour}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatPrice(order.shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatPrice(order.tax)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(order.total)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
