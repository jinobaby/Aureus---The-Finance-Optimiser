import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 1) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsLoading(true)

        try {
            // Simulate API call - replace with actual authentication
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            // Navigate to user dashboard on success
            navigate('/user/dashboard')
        } catch {
            setErrors({ submit: 'Invalid credentials. Please try again.' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Decorative Left Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-[var(--color-bg-main)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-bg-secondary)] to-[var(--color-bg-main)] opacity-90"></div>
                <div className="relative w-full flex flex-col items-center justify-center text-white p-12 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Welcome to Aureus
                    </h2>
                    <p className="text-lg md:text-xl text-center max-w-md">
                        Your personal finance optimizer. Take control of your financial future today.
                    </p>
                    <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-[var(--color-bg-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Smart Finance Management</h3>
                                <p className="text-sm text-white/80">Optimize your investments and savings</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--color-gold)] rounded-full opacity-20"></div>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-accent)] rounded-full opacity-20"></div>
            </div>

            {/* Right Login Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[var(--color-bg-card)]">
                <div className="w-full max-w-md mx-auto space-y-8">
                    <div>
                        <Link 
                            to="/" 
                            className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-gold)] transition-colors duration-200 font-medium mb-8"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <h2 className="text-3xl font-extrabold text-white text-center mb-2">
                            Sign in to your account
                        </h2>
                        <p className="text-sm text-gray-400 text-center">
                            Access your personal finance dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all duration-200 text-white placeholder-gray-500"
                                />
                                {errors.email && (
                                    <p className="absolute -bottom-6 left-0 text-[var(--color-error)] text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all duration-200 text-white placeholder-gray-500"
                                />
                                {errors.password && (
                                    <p className="absolute -bottom-6 left-0 text-[var(--color-error)] text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        {errors.submit && (
                            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mt-6">
                                <p className="text-[var(--color-error)] text-sm flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.submit}
                                </p>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-lg font-semibold text-white mt-8 transition-all duration-300 transform hover:scale-[1.02] ${
                                isLoading 
                                    ? 'bg-gray-600 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-blue)] hover:from-[var(--color-blue)] hover:to-[var(--color-accent)] shadow-lg hover:shadow-[var(--color-accent)]/50'
                            }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Logging in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400">
                                Don't have an account?{' '}
                                <Link 
                                    to="/User-signup" 
                                    className="text-[var(--color-accent)] hover:text-[var(--color-gold)] font-semibold transition-colors duration-200 hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;