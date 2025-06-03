import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="animate-fade-in py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Account Navigation */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <User size={24} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-medium text-lg">{user?.firstName} {user?.lastName}</p>
                  <p className="text-primary-600">{user?.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  className="flex items-center gap-3 w-full p-3 rounded-md bg-primary-50 text-primary-900 font-medium"
                >
                  <User size={20} />
                  <span>Account Details</span>
                </button>
                
                <button
                  onClick={() => navigate('/orders')}
                  className="flex items-center gap-3 w-full p-3 rounded-md text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  <ShoppingBag size={20} />
                  <span>Orders</span>
                </button>
                
                <button
                  onClick={() => navigate('/wishlist')}
                  className="flex items-center gap-3 w-full p-3 rounded-md text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  <Heart size={20} />
                  <span>Wishlist</span>
                </button>
                
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="flex items-center gap-3 w-full p-3 rounded-md text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Account Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Account Details</h2>
              
              <form className="max-w-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      defaultValue={user?.firstName}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      defaultValue={user?.lastName}
                      className="input"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input"
                  />
                </div>
                
                <h3 className="text-lg font-medium mt-8 mb-4">Change Password</h3>
                
                <div className="mb-4">
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-primary-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="input"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="newPassword" className="block text-sm font-medium text-primary-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="input"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="input"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;