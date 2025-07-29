import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { Lock, User, Eye, EyeOff, Shield, CheckCircle, Mail, Zap } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(username, password);
      if (success) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Purple Gradient */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 flex items-center justify-center p-8">
        <div className="max-w-md text-white">
          <h1 className="text-3xl font-bold mb-6">
            "Manage your data platform with ease. The admin panel provides comprehensive control over your website content, user interactions, and analytics."
          </h1>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-white/90">Secure authentication & session management</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-white/90">Real-time content management</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-white/90">Instant updates & analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h2>
            <p className="text-gray-600">Sign in to manage your Cazpian website</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'register'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Sign In</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors"
                    placeholder="admin"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors pr-12"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium mb-2">Demo credentials:</p>
                <div className="text-sm text-blue-600 space-y-1">
                  <p>Username: <span className="font-mono bg-blue-100 px-2 py-1 rounded">admin</span></p>
                  <p>Password: <span className="font-mono bg-blue-100 px-2 py-1 rounded">admin123</span></p>
                </div>
              </div>
            </div>
          )}

          {/* Register Form Placeholder */}
          {activeTab === 'register' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Registration Coming Soon</h3>
              <p className="text-gray-600">New user registration will be available in the next update.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;