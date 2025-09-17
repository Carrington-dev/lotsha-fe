import React from 'react';
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
  CheckCircle
} from 'lucide-react';

const CattleTradingHomepage = () => {
  const featuredCattle = [
    {
      id: 1,
      name: 'Holstein Dairy Cow',
      age: '3 years',
      weight: '1,400 lbs',
      price: '$2,800',
      image: '🐄',
      location: 'Texas Ranch',
      health: 'Excellent',
      breeding: 'Registered',
      milkProduction: '7 gal/day'
    },
    {
      id: 2,
      name: 'Angus Bull',
      age: '4 years',
      weight: '2,200 lbs',
      price: '$4,500',
      image: '🐂',
      location: 'Montana Farm',
      health: 'Excellent',
      breeding: 'Champion Bloodline',
      genetics: 'Premium'
    },
    {
      id: 3,
      name: 'Charolais Heifer',
      age: '18 months',
      weight: '950 lbs',
      price: '$1,850',
      image: '🐄',
      location: 'Oklahoma Ranch',
      health: 'Very Good',
      breeding: 'Purebred',
      growth: 'Fast gaining'
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Cattle Sourcing',
      description: 'We help you find the perfect cattle for your operation with our extensive network.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Health Certification',
      description: 'All cattle come with complete health records and veterinary certifications.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Transportation',
      description: 'Safe and reliable livestock transportation to your location nationwide.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Guarantee',
      description: 'Every animal is thoroughly inspected and comes with our satisfaction guarantee.'
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Cattle Sold', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '1,500+', label: 'Happy Ranchers', icon: <Users className="w-6 h-6" /> },
    { number: '15', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🐄</div>
              <div>
                <span className="text-xl font-bold text-gray-900">LotshaTrades</span>
                <p className="text-xs text-gray-600">Premium Cattle Trading</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#buy" className="text-gray-600 hover:text-green-600 transition-colors">Buy Cattle</a>
              <a href="#sell" className="text-gray-600 hover:text-green-600 transition-colors">Sell Cattle</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Premium <span className="text-green-600">Cattle Trading</span> Made Simple
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with trusted ranchers nationwide. Buy and sell quality cattle with confidence, backed by 15+ years of expertise in livestock trading.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
                  🐄 Browse Cattle
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg">
                  💰 Sell Your Cattle
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">25K+</div>
                  <div className="text-sm text-gray-600">Cattle Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">1,500+</div>
                  <div className="text-sm text-gray-600">Satisfied Ranchers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Featured Cattle Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🐄</div>
                  <h3 className="text-xl font-bold text-gray-900">Holstein Dairy Cow</h3>
                  <p className="text-gray-600">3 years • 1,400 lbs • Excellent health</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-800">Milk Production</div>
                    <div className="text-green-600">7 gallons/day</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800">Registration</div>
                    <div className="text-blue-600">Holstein USA</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="font-semibold text-purple-800">Health Score</div>
                    <div className="text-purple-600">A+ Certified</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="font-semibold text-orange-800">Location</div>
                    <div className="text-orange-600">Texas Ranch</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-green-600">$2,800</div>
                    <div className="text-sm text-gray-500">Fair market price</div>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cattle Section */}
      <section id="buy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Cattle Available Now
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked quality cattle from trusted ranchers across the country
            </p>
          </div>

          {/* Cattle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCattle.map((cattle) => (
              <div key={cattle.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{cattle.image}</div>
                    <h3 className="text-xl font-bold text-gray-900">{cattle.name}</h3>
                    <p className="text-gray-600">{cattle.age} • {cattle.weight}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">{cattle.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Health:</span>
                      <span className="font-semibold text-green-600">{cattle.health}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Breeding:</span>
                      <span className="font-semibold">{cattle.breeding}</span>
                    </div>
                    {cattle.milkProduction && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Milk/Day:</span>
                        <span className="font-semibold text-blue-600">{cattle.milkProduction}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{cattle.price}</div>
                      <div className="text-sm text-gray-500">Negotiable</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              View All Cattle
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Cattle Trading Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for successful cattle trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-green-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-200 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Ranchers Trust LotshaTrades
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                15+ years of experience connecting buyers and sellers in the cattle industry.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verified Livestock</h4>
                    <p className="text-gray-600">Every animal is health-certified and registration verified</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Secure Transactions</h4>
                    <p className="text-gray-600">Protected payments and legal documentation for every trade</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nationwide Delivery</h4>
                    <p className="text-gray-600">Professional livestock transportation to your location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Leader</h3>
                <p className="text-gray-600">Trusted by ranchers nationwide</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Health Guarantee</span>
                  <span className="text-green-600 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">On-time Delivery</span>
                  <span className="text-green-600 font-semibold">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-green-600 font-semibold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Repeat Customers</span>
                  <span className="text-green-600 font-semibold">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Trade Cattle?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of successful ranchers who trust LotshaTrades for their cattle trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              🐄 Start Buying
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors border border-green-400">
              💰 Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🐄</div>
                <div>
                  <span className="text-xl font-bold">LotshaTrades</span>
                  <p className="text-xs text-gray-400">Premium Cattle Trading</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting ranchers nationwide since 2008. Your trusted partner in cattle trading.
              </p>
              <div className="flex space-x-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <Mail className="w-5 h-5 text-gray-400" />
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Buying</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Cattle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dairy Cows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beef Cattle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulls & Heifers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Selling</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">List Your Cattle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 LotshaTrades. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Livestock Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CattleTradingHomepage;