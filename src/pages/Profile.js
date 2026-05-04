import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import { formatDate } from '../utils/helpers';
import { UserIcon, CogIcon, ShoppingBagIcon } from '@heroicons/react/outline';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfile } = useAuth();
  const { orders } = useOrder();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [saved, setSaved] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">Please log in to view your profile</p>
          <Link to="/auth/login" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile({
      name: formData.name,
      email: formData.email,
    });
    setEditMode(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const recentOrders = orders.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        {saved && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">✓ Profile updated successfully</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              {/* Profile Avatar */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <UserIcon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* User Name */}
              <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 text-center text-sm mb-6">{user.email}</p>

              {/* Member Since */}
              <div className="text-center text-sm text-gray-600 mb-6 pb-6 border-b">
                <p>
                  Member since {formatDate(user.createdAt)}
                </p>
              </div>

              {/* Menu */}
              <nav className="space-y-2 mb-6">
                <Link
                  to="/orders"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span>Order History</span>
                </Link>
                <button
                  className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition justify-start"
                >
                  <CogIcon className="w-5 h-5" />
                  <span>Settings</span>
                </button>
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full btn-outline"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Profile Information</h3>
                {!editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn-outline text-sm"
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              {editMode ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleSave}
                      className="flex-1 btn-primary"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex-1 btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="text-lg font-medium text-gray-900">{user.name}</p>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 mb-1">Email Address</p>
                    <p className="text-lg font-medium text-gray-900">{user.email}</p>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 mb-1">Member Since</p>
                    <p className="text-lg font-medium text-gray-900">
                      {formatDate(user.createdAt)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Recent Orders</h3>
                {recentOrders.length > 0 && (
                  <Link to="/orders" className="text-primary hover:text-primary-dark text-sm font-medium">
                    View All
                  </Link>
                )}
              </div>

              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <Link
                      key={order.id}
                      to={`/orders/${order.id}`}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${order.total.toFixed(2)}
                        </p>
                        <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 mt-1">
                          {order.status}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No orders yet</p>
                  <Link to="/" className="btn-primary">
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Preferences</h4>
                  <label className="flex items-center space-x-3 cursor-pointer mb-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Marketing emails</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">Order notifications</span>
                  </label>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Danger Zone</h4>
                  <button className="btn-outline border-red-500 text-red-600 hover:bg-red-50">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
