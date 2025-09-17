
"use client";
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
import { useRouter } from 'next/navigation';

import { useState } from "react";

export default function Header() {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const router = useRouter();

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
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div onClick={ () => router.push("/")} className="flex items-center space-x-2 md:space-x-3">
                <div className="text-2xl md:text-4xl">🐄</div>
                <div>
                    <span className="text-lg md:text-xl font-bold text-gray-900">LotshaTrading</span>
                    <p className="text-xs text-gray-600 hidden sm:block">Premium Livestock Trading</p>
                </div>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a href="/buy" className="text-gray-600 hover:text-green-600 transition-colors">Buy Livestock</a>
                <a href="/sell" className="text-gray-600 hover:text-green-600 transition-colors">Sell Livestock</a>
                <a href="/services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
                <a href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
                <a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
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
                    <a href="/buy" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Buy Livestock</a>
                    <a href="/sell" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Sell Livestock</a>
                    <a href="/services" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Services</a>
                    <a href="/about" className="block text-gray-600 hover:text-green-600 transition-colors py-2">About</a>
                    <a href="/contact" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Contact</a>
                    <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Get Quote
                    </button>
                </div>
                </div>
            )}
            </div>
        </nav>
        );
}