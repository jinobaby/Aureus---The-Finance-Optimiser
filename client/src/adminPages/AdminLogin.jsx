import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AdminLoginFun } from '../redux/AdminSlice'

function AdminLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
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
        } else if (formData.password.length < 6) {
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
            // Simulate API call - replace with actual adminApi.login(formData)
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            // Mock successful login response
            const mockResponse = {
                data: {
                    Token: 'mock-admin-token',
                    Id: 'admin-123'
                }
            }
            
            dispatch(AdminLoginFun(mockResponse.data))
            localStorage.setItem('adminEmail', formData.email)
            navigate('/Admin')
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
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue)] via-[var(--color-accent)] to-[var(--color-bg-main)] opacity-90"></div>
                <div className="relative w-full flex flex-col items-center justify-center text-white p-12 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Administrator Portal
                    </h2>
                    <p className="text-lg md:text-xl text-center max-w-md">
                        Access the administrative dashboard to manage and monitor platform operations.
                    </p>
                    <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-blue)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-[var(--color-bg-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Secure Access</h3>
                                <p className="text-sm text-white/80">Protected administrative controls</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--color-blue)] rounded-full opacity-20"></div>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-accent)] rounded-full opacity-20"></div>
            </div>

            {/* Right Login Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[var(--color-bg-card)]">
                <div className="w-full max-w-md mx-auto space-y-8">
                    <div>
                        <Link 
                            to="/" 
                            className="inline-flex items-center text-[var(--color-blue)] hover:text-[var(--color-accent)] transition-colors duration-200 font-medium mb-8"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <h2 className="text-3xl font-extrabold text-white text-center mb-2">
                            Admin Login
                        </h2>
                        <p className="text-sm text-gray-400 text-center">
                            Access the administrative dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-6">
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
                                        className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-blue)] focus:border-[var(--color-blue)] transition-all duration-200 text-white placeholder-gray-500"
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
                                        className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-blue)] focus:border-[var(--color-blue)] transition-all duration-200 text-white placeholder-gray-500"
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
                        </div>

                        {errors.submit && (
                            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
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
                                    : 'bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-accent)] hover:from-[var(--color-accent)] hover:to-[var(--color-blue)] shadow-lg hover:shadow-[var(--color-blue)]/50'
                            }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Authenticating...
                                </span>
                            ) : (
                                'Sign In to Dashboard'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
