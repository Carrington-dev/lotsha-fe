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
  Globe,
  Target,
  Handshake,
  Zap,
  TreePine,
  Building,
  User
} from 'lucide-react';

const AboutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const milestones = [
    {
      year: '2006',
      title: 'Company Founded',
      description: 'Started as a small family business connecting local farmers',
      icon: '🌱'
    },
    {
      year: '2010',
      title: 'Digital Platform Launch',
      description: 'Launched our first online livestock trading platform',
      icon: '💻'
    },
    {
      year: '2015',
      title: 'Nationwide Expansion',
      description: 'Expanded operations to serve farmers across all 50 states',
      icon: '🇺🇸'
    },
    {
      year: '2018',
      title: 'Mobile App Release',
      description: 'Introduced mobile app for on-the-go livestock trading',
      icon: '📱'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Implemented AI-powered matching system for better trades',
      icon: '🤖'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launched carbon-neutral transportation program',
      icon: '🌍'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: '25+ years in agriculture, former ranch owner turned tech entrepreneur',
      image: '👩‍💼',
      expertise: 'Strategic Leadership'
    },
    {
      name: 'Mike Rodriguez',
      position: 'Head of Operations',
      bio: 'Veterinarian with 20 years of livestock health and safety experience',
      image: '👨‍⚕️',
      expertise: 'Animal Health & Safety'
    },
    {
      name: 'Emily Chen',
      position: 'Technology Director',
      bio: 'Former Silicon Valley engineer specializing in agricultural technology',
      image: '👩‍💻',
      expertise: 'Platform Development'
    },
    {
      name: 'David Thompson',
      position: 'Market Analyst',
      bio: 'Economist with expertise in agricultural commodities and pricing',
      image: '👨‍📊',
      expertise: 'Market Intelligence'
    }
  ];

  const values = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Trust & Transparency',
      description: 'We believe in honest dealings and transparent pricing. Every transaction is backed by our integrity guarantee.',
      color: 'blue'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Animal Welfare',
      description: 'The health and well-being of livestock is our top priority. All animals must meet strict health standards.',
      color: 'green'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Focus',
      description: 'Supporting farming communities nationwide by connecting buyers and sellers in meaningful partnerships.',
      color: 'purple'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to make livestock trading more efficient and accessible.',
      color: 'orange'
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and supporting sustainable farming methods.',
      color: 'emerald'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in every aspect of our service and customer experience.',
      color: 'red'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Livestock Traded', icon: '🐄' },
    { number: '3,200+', label: 'Active Farmers', icon: '👨‍🌾' },
    { number: '48', label: 'States Served', icon: '🗺️' },
    { number: '99%', label: 'Satisfaction Rate', icon: '⭐' },
    { number: '18', label: 'Years Experience', icon: '🏆' },
    { number: '24/7', label: 'Customer Support', icon: '📞' }
  ];

  const certifications = [
    { name: 'USDA Certified', icon: '🇺🇸', description: 'Authorized USDA livestock dealer' },
    { name: 'Better Business Bureau A+', icon: '🏅', description: 'Highest rating for business practices' },
    { name: 'ISO 27001', icon: '🔒', description: 'Information security management' },
    { name: 'Animal Welfare Approved', icon: '🐾', description: 'High welfare standards certification' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl md:text-8xl mb-6">🏛️</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-green-600">LivestockHub</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              For nearly two decades, we've been the bridge connecting farmers, ranchers, and livestock enthusiasts across America. 
              Our mission is simple: make livestock trading safe, transparent, and profitable for everyone.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl md:text-2xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg">
                <p>
                  LivestockHub began in 2006 when founder Sarah Johnson, a third-generation rancher from Texas, 
                  faced the challenge of connecting with reliable buyers for her cattle. Traditional livestock 
                  auctions were often distant, expensive, and didn't always yield fair prices.
                </p>
                <p>
                  What started as a simple solution to help local farmers has grown into America's most trusted 
                  livestock trading platform. We've facilitated over 50,000 successful trades, connecting farmers 
                  from coast to coast and ensuring fair, transparent pricing for all parties.
                </p>
                <p>
                  Today, we're proud to serve over 3,200 active farmers across 48 states, combining cutting-edge 
                  technology with old-fashioned agricultural values of trust, integrity, and community support.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">📈</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Growth</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Livestock Traded</span>
                  <span className="text-green-600 font-bold">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">States Covered</span>
                  <span className="text-green-600 font-bold">48/50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Trade Value</span>
                  <span className="text-green-600 font-bold">$2,850</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Retention</span>
                  <span className="text-green-600 font-bold">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Driving the future of agriculture through innovation, integrity, and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center text-base md:text-lg">
                To revolutionize livestock trading by providing a secure, transparent, and efficient platform 
                that empowers farmers to achieve fair prices while maintaining the highest standards of animal welfare.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center text-base md:text-lg">
                To become the global leader in livestock trading technology, fostering sustainable agriculture 
                and strengthening farming communities worldwide through innovation and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Key milestones in our mission to transform livestock trading
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">{milestone.icon}</span>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="text-lg md:text-xl font-bold text-green-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`text-${value.color}-600 mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Experienced professionals dedicated to serving the agricultural community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-5xl md:text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm md:text-base mb-4">{member.bio}</p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Trusted by industry leaders and regulatory bodies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl md:text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-green-100">
            Experience the difference that comes with nearly two decades of livestock trading expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              🐄 Start Trading
            </button>
            <button className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors border border-green-400">
              📞 Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default AboutPage;