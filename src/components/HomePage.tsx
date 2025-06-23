import React from 'react';
import { ArrowRight, Shield, Award, Users, Wrench, CheckCircle, Star } from 'lucide-react';

interface HomePageProps {
  onPageChange?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const brands = [
    { 
      name: 'RUD', 
      color: 'text-blue-600', 
      description: 'Chain Slings, Lifting Points & Conveying Products',
      logo: '/Screenshot 2025-06-23 210419.png',
      speciality: 'German Engineering Excellence'
    },
    { 
      name: 'FERRETERRO', 
      color: 'text-orange-500', 
      description: 'Polyester Flat & Round Webbing Slings',
      logo: '/Screenshot 2025-06-23 210429.png',
      speciality: 'Premium Polyester Solutions'
    },
    { 
      name: 'KITO', 
      color: 'text-yellow-600', 
      description: 'Electric Chain & Wire Rope Hoist (125kgs-20t)',
      logo: '/Screenshot 2025-06-23 210435.png',
      speciality: 'Japanese Precision Engineering'
    },
    { 
      name: 'Crosby', 
      color: 'text-red-600', 
      description: 'Shackles, Turnbuckles & Lifting Hardware',
      logo: '/Screenshot 2025-06-23 210442.png',
      speciality: 'American Heritage Quality'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety Prioritization',
      description: 'Complete solution provider for Material Handling keeping safety on prioritization with certified products'
    },
    {
      icon: Award,
      title: 'Expert Leadership',
      description: 'Director with 24 years industrial experience including 18 years MH expertise with German MNC'
    },
    {
      icon: Users,
      title: 'Authorized Partnerships',
      description: 'Official authorized dealer for 4 premium international brands - RUD, Ferreterro, Kito, and Crosby'
    },
    {
      icon: Wrench,
      title: 'Sector Expertise',
      description: 'Specialized solutions for Industrial, Wind Power, Power Generation, and Automotive sectors'
    }
  ];

  const sectors = [
    { name: 'Industrial', icon: '🏭', description: 'Manufacturing & Heavy Industry' },
    { name: 'Wind Power', icon: '🌪️', description: 'Wind Energy Solutions' },
    { name: 'Power Generation', icon: '⚡', description: 'Power Plant Operations' },
    { name: 'Automotive', icon: '🚗', description: 'Auto Manufacturing' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                  <Star className="text-orange-500" size={16} />
                  <span className="text-orange-600 font-semibold text-sm">Established 2025 • Chennai Based</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                  Your Partner in
                  <span className="text-orange-500">
                    {' '}Material Handling
                  </span>
                  <br />Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Alpha MHS delivers premium material handling solutions with expert leadership backed by 
                  24 years of industrial experience. Serving Industrial, Wind, Power, and Auto sectors across Tamil Nadu.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onPageChange?.('products')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onPageChange?.('contact')}
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">4</div>
                  <div className="text-sm text-gray-600">Premium Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">Safety Focus</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-orange-500">Authorized Dealer For</h3>
                <div className="grid grid-cols-2 gap-6">
                  {brands.map((brand, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} Logo`} 
                          className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{brand.speciality}</p>
                      <p className="text-sm text-gray-600 font-medium">{brand.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Sectors We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized material handling solutions tailored for diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center border border-gray-100">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{sector.name}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Alpha MHS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert leadership combined with premium international partnerships for unmatched material handling solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive material handling solutions from world-renowned manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg hover:shadow-xl">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} Logo`} 
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold border border-orange-200">
                      {brand.speciality}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{brand.description}</p>
                  <button 
                    onClick={() => onPageChange?.('products')}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
                  >
                    <span>View Products</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Alpha MHS for reliable, safe, and efficient material handling solutions. 
            Let our experienced team help improve your operations with premium international products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange?.('contact')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;