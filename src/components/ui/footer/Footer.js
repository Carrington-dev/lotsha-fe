"use client";
import { 
 
  Phone, 
  Mail, 
  MapPin, 
  
} from 'lucide-react';

export default function Footer() {
  return (
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
  );
}
