import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Initialize orders from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('vieworaOrders');
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (error) {
        console.error('Failed to parse saved orders:', error);
      }
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('vieworaOrders', JSON.stringify(orders));
  }, [orders]);

  const createOrder = (cartItems, shippingInfo, paymentInfo) => {
    if (!cartItems || cartItems.length === 0) {
      throw new Error('Cart is empty');
    }

    const orderId = `ORD-${uuidv4().substr(0, 8).toUpperCase()}`;
    const order = {
      id: orderId,
      items: cartItems,
      shippingInfo,
      paymentInfo: {
        lastFour: paymentInfo.cardNumber?.slice(-4) || 'XXXX',
        method: paymentInfo.method || 'Credit Card',
      },
      total: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
      subtotal: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
      tax: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.08,
      shipping: 10,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    };

    order.total = order.subtotal + order.tax + order.shipping;

    setOrders([...orders, order]);
    return order;
  };

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const getOrdersByUser = (userId) => {
    // In a real app, orders would be associated with userId
    // For now, we'll return all orders (demo purposes)
    return orders;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, status }
        : order
    ));
  };

  const getTrackingInfo = (orderId) => {
    const order = getOrderById(orderId);
    if (!order) return null;

    const statusSteps = [
      { status: 'Pending', label: 'Order Confirmed', date: order.createdAt },
      { status: 'Processing', label: 'Processing', date: new Date(new Date(order.createdAt).getTime() + 1 * 24 * 60 * 60 * 1000).toISOString() },
      { status: 'Shipped', label: 'Shipped', date: new Date(new Date(order.createdAt).getTime() + 2 * 24 * 60 * 60 * 1000).toISOString() },
      { status: 'Delivered', label: 'Delivered', date: order.estimatedDelivery },
    ];

    return {
      order,
      statusSteps,
      currentStep: statusSteps.findIndex(s => s.status === order.status),
    };
  };

  return (
    <OrderContext.Provider value={{
      orders,
      createOrder,
      getOrderById,
      getOrdersByUser,
      updateOrderStatus,
      getTrackingInfo,
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
