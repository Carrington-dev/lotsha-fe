"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Star, 
  Shield, 
  Truck, 
  Award, 
  Users, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Eye,
  Heart,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Menu,
  X,
  Filter
} from 'lucide-react';

const LivestockTradingWebsite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredLivestock = [
    {
      id: 1,
      name: 'Holstein Dairy Cow',
      category: 'cattle',
      age: '3 years',
      weight: '1,400 lbs',
      price: '$2,800',
      image: '🐄',
      location: 'Texas Ranch',
      health: 'Excellent',
      breeding: 'Registered',
      special: 'Milk Production: 7 gal/day'
    },
    {
      id: 2,
      name: 'Angus Bull',
      category: 'cattle',
      age: '4 years',
      weight: '2,200 lbs',
      price: '$4,500',
      image: '🐂',
      location: 'Montana Farm',
      health: 'Excellent',
      breeding: 'Champion Bloodline',
      special: 'Premium Genetics'
    },
    {
      id: 3,
      name: 'Hampshire Pig',
      category: 'pigs',
      age: '8 months',
      weight: '280 lbs',
      price: '$450',
      image: '🐷',
      location: 'Iowa Farm',
      health: 'Very Good',
      breeding: 'Purebred',
      special: 'Fast Growth Rate'
    },
    {
      id: 4,
      name: 'Boer Goat',
      category: 'goats',
      age: '2 years',
      weight: '180 lbs',
      price: '$320',
      image: '🐐',
      location: 'Tennessee Farm',
      health: 'Excellent',
      breeding: 'Registered',
      special: 'High Meat Quality'
    },
    {
      id: 5,
      name: 'Dorper Sheep',
      category: 'sheep',
      age: '18 months',
      weight: '140 lbs',
      price: '$280',
      image: '🐑',
      location: 'Colorado Ranch',
      health: 'Good',
      breeding: 'Purebred',
      special: 'Hardy & Adaptable'
    },
    {
      id: 6,
      name: 'Clydesdale Horse',
      category: 'horses',
      age: '5 years',
      weight: '1,800 lbs',
      price: '$8,500',
      image: '🐴',
      location: 'Kentucky Farm',
      health: 'Excellent',
      breeding: 'Championship Line',
      special: 'Show Quality'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Livestock', icon: '🌾' },
    { id: 'cattle', name: 'Cattle', icon: '🐄' },
    { id: 'pigs', name: 'Pigs', icon: '🐷' },
    { id: 'goats', name: 'Goats', icon: '🐐' },
    { id: 'sheep', name: 'Sheep', icon: '🐑' },
    { id: 'horses', name: 'Horses', icon: '🐴' }
  ];

  const services = [
    {
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Livestock Sourcing',
      description: 'Find the perfect animals for your farm with our extensive network of trusted sellers.'
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Health Certification',
      description: 'All livestock comes with complete health records and veterinary certifications.'
    },
    {
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Safe Transportation',
      description: 'Professional livestock transportation services to your location nationwide.'
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Quality Guarantee',
      description: 'Every animal is thoroughly inspected and comes with our satisfaction guarantee.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Livestock Sold', icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: '3,200+', label: 'Happy Farmers', icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: '18', label: 'Years Experience', icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: '99%', label: 'Satisfaction Rate', icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  const filteredLivestock = activeCategory === 'all' 
    ? featuredLivestock 
    : featuredLivestock.filter(animal => animal.category === activeCategory);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="text-2xl md:text-4xl">🐄</div>
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">LivestockHub</span>
                <p className="text-xs text-gray-600 hidden sm:block">Premium Livestock Trading</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#buy" className="text-gray-600 hover:text-green-600 transition-colors">Buy Livestock</a>
              <a href="#sell" className="text-gray-600 hover:text-green-600 transition-colors">Sell Livestock</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm lg:text-base">
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 pt-4 pb-6 space-y-4">
                <a href="#buy" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Buy Livestock</a>
                <a href="#sell" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Sell Livestock</a>
                <a href="#services" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Services</a>
                <a href="#about" className="block text-gray-600 hover:text-green-600 transition-colors py-2">About</a>
                <a href="#contact" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Contact</a>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-8 md:pt-12 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Premium <span className="text-green-600">Livestock Trading</span> Platform
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Connect with trusted farmers nationwide. Buy and sell quality livestock with confidence, backed by 18+ years of expertise in agricultural trading.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <button className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-base md:text-lg">
                  🐄 Browse Livestock
                </button>
                <button className="border-2 border-green-600 text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-base md:text-lg">
                  💰 Sell Your Animals
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Animals Sold</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-600">3,200+</div>
                  <div className="text-xs md:text-sm text-gray-600">Happy Farmers</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-600">99%</div>
                  <div className="text-xs md:text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Featured Livestock Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 max-w-md mx-auto lg:max-w-none">
                <div className="text-center mb-4 md:mb-6">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4">🐄</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Holstein Dairy Cow</h3>
                  <p className="text-sm md:text-base text-gray-600">3 years • 1,400 lbs • Excellent health</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
                  <div className="bg-green-50 p-2 md:p-3 rounded-lg">
                    <div className="font-semibold text-green-800">Milk Production</div>
                    <div className="text-green-600">7 gallons/day</div>
                  </div>
                  <div className="bg-blue-50 p-2 md:p-3 rounded-lg">
                    <div className="font-semibold text-blue-800">Registration</div>
                    <div className="text-blue-600">Holstein USA</div>
                  </div>
                  <div className="bg-purple-50 p-2 md:p-3 rounded-lg">
                    <div className="font-semibold text-purple-800">Health Score</div>
                    <div className="text-purple-600">A+ Certified</div>
                  </div>
                  <div className="bg-orange-50 p-2 md:p-3 rounded-lg">
                    <div className="font-semibold text-orange-800">Location</div>
                    <div className="text-orange-600">Texas Ranch</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-green-600">$2,800</div>
                    <div className="text-xs md:text-sm text-gray-500">Fair market price</div>
                  </div>
                  <button className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm md:text-base">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Browse by Category</h3>
            <p className="text-sm md:text-base text-gray-600">Find the perfect livestock for your farm</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors font-medium text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <span className="text-lg md:text-xl">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Livestock Section */}
      <section id="buy" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Featured Livestock Available Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Hand-picked quality animals from trusted farmers across the country
            </p>
          </div>

          {/* Livestock Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {filteredLivestock.map((animal) => (
              <div key={animal.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-4 md:p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl md:text-5xl mb-3">{animal.image}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{animal.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">{animal.age} • {animal.weight}</p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold text-right">{animal.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Health:</span>
                      <span className="font-semibold text-green-600">{animal.health}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Breeding:</span>
                      <span className="font-semibold text-right">{animal.breeding}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Special:</span>
                      <span className="font-semibold text-blue-600 text-right">{animal.special}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-green-600">{animal.price}</div>
                      <div className="text-xs md:text-sm text-gray-500">Negotiable</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                      </button>
                      <button className="bg-green-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              View All Livestock
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Complete Livestock Trading Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Everything you need for successful livestock trading
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-green-600 mb-3 md:mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-200 mb-3 md:mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Why Farmers Trust LivestockHub
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                18+ years of experience connecting buyers and sellers in the livestock industry.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">Verified Livestock</h4>
                    <p className="text-sm md:text-base text-gray-600">Every animal is health-certified and registration verified</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">Secure Transactions</h4>
                    <p className="text-sm md:text-base text-gray-600">Protected payments and legal documentation for every trade</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 mt-1">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">Nationwide Delivery</h4>
                    <p className="text-sm md:text-base text-gray-600">Professional livestock transportation to your location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg mt-8 lg:mt-0">
              <div className="text-center mb-6 md:mb-8">
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">🏆</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Industry Leader</h3>
                <p className="text-sm md:text-base text-gray-600">Trusted by farmers nationwide</p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between text-sm md:text-base">
                  <span className="text-gray-600">Health Guarantee</span>
                  <span className="text-green-600 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between text-sm md:text-base">
                  <span className="text-gray-600">On-time Delivery</span>
                  <span className="text-green-600 font-semibold">99.8%</span>
                </div>
                <div className="flex items-center justify-between text-sm md:text-base">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-green-600 font-semibold">99%</span>
                </div>
                <div className="flex items-center justify-between text-sm md:text-base">
                  <span className="text-gray-600">Repeat Customers</span>
                  <span className="text-green-600 font-semibold">89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Trade Livestock?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-green-100">
            Join thousands of successful farmers who trust LivestockHub for their trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              🐄 Start Buying
            </button>
            <button className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors border border-green-400">
              💰 Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
                              <div className="flex items-center space-x-2 md:space-x-3 mb-4">
                <div className="text-2xl md:text-3xl">🐄</div>
                <div>
                  <span className="text-lg md:text-xl font-bold">LivestockHub</span>
                  <p className="text-xs text-gray-400">Premium Livestock Trading</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Connecting farmers nationwide since 2006. Your trusted partner in livestock trading.
              </p>
              <div className="flex space-x-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Buying</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Livestock</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cattle & Bulls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pigs & Hogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Goats & Sheep</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Horses</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Selling</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">List Your Animals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Support</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Certificates</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-gray-400">© 2025 LivestockHub. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Livestock Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Safety Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LivestockTradingWebsite;