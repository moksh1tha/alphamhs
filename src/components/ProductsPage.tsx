import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Shield, Award, Wrench, Zap } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('rud');

  const productCategories = {
    rud: {
      name: 'RUD',
      color: 'blue',
      website: 'www.rud.com',
      description: 'German engineering excellence in lifting and lashing solutions',
      logo: '/Screenshot 2025-06-23 210419.png',
      products: [
        {
          category: 'Chain Slings & Components',
          items: [
            'Grade 100 & 120 Chain Slings & Components',
            'Grade 100 Lifting Points',
            'STD Lifting & Spreader Beams',
            'Personal Security Anchorage Points'
          ]
        },
        {
          category: 'Conveying Products',
          items: [
            'Forged Link chain & Round Link Chain for Chain Conveyors',
            'Chain Conveyor Components',
            'Industrial Chain Solutions'
          ]
        }
      ]
    },
    ferreterro: {
      name: 'FERRETERRO',
      color: 'orange',
      website: 'www.ferreterro.com',
      description: 'Premium polyester lifting and lashing solutions',
      logo: '/Screenshot 2025-06-23 210429.png',
      products: [
        {
          category: 'Webbing Slings',
          items: [
            'Polyester Flat Webbing Slings',
            'Polyester Round Webbing Slings',
            'Eye & Eye Round Slings',
            'Extreme Round Slings – Dyneema'
          ]
        },
        {
          category: 'Lashing Solutions',
          items: [
            'Rotomaxx Slings',
            'Ratchet Lashing Belts & Buckles',
            'Cargo Securing Systems'
          ]
        }
      ]
    },
    kito: {
      name: 'KITO',
      color: 'yellow',
      website: 'www.kito.co.in',
      description: 'Japanese precision in hoisting and lifting equipment',
      logo: '/Screenshot 2025-06-23 210435.png',
      products: [
        {
          category: 'Electric Hoists',
          items: [
            'Electric Chain Hoist (125kgs to 20t)',
            'Ultra Low Head Room Hoist (250kgs to 5t)',
            'Explosion Proof Hoist (500kgs to 5t)',
            'Wire Rope Hoist (3t, 5t & 10t)'
          ]
        },
        {
          category: 'Manual Equipment',
          items: [
            'Manual Chain Hoist',
            'Manual Chain Pulley block (250kgs to 20t)',
            'Ratchet Lever Hoist (0.9t to 9t)',
            'Light Cranes (Upto 1t)'
          ]
        }
      ]
    },
    crosby: {
      name: 'Crosby',
      color: 'red',
      website: 'www.thecrosbygroup.com',
      description: 'American heritage in rigging and lifting hardware',
      logo: '/Screenshot 2025-06-23 210442.png',
      products: [
        {
          category: 'Crosby - Shackles',
          items: [
            'D Shackle',
            'Bow Shackle',
            'Wide Body Shackle',
            'Turn Buckle'
          ]
        },
        {
          category: 'Crosby SP - Load Monitoring Devices',
          items: [
            'Radio Link Plus',
            'Mini Weigher Plus',
            'Blue Link'
          ]
        },
        {
          category: 'Crosby IP - Lifting Solutions',
          items: [
            'Horizontal Plate Lifting Clamps',
            'Vertical Plate Lifting Clamps',
            'Magnets'
          ]
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-500',
        hover: 'hover:bg-blue-50'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-500',
        hover: 'hover:bg-orange-50'
      },
      yellow: {
        bg: 'bg-yellow-500',
        text: 'text-yellow-600',
        border: 'border-yellow-500',
        hover: 'hover:bg-yellow-50'
      },
      red: {
        bg: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-500',
        hover: 'hover:bg-red-50'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-black">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of material handling products from world-renowned manufacturers, 
              backed by our director's 24 years of industrial expertise
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-[120px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(productCategories).map(([key, category]) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === key
                      ? `${colors.bg} text-white shadow-lg`
                      : `${colors.text} ${colors.hover} border-2 ${colors.border} bg-white`
                  }`}
                >
                  <img 
                    src={category.logo} 
                    alt={`${category.name} Logo`} 
                    className="h-6 w-auto object-contain"
                  />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(productCategories).map(([key, category]) => {
            if (key !== activeCategory) return null;
            
            const colors = getColorClasses(category.color);
            
            return (
              <div key={key} className="space-y-12">
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={category.logo} 
                      alt={`${category.name} Logo`} 
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h2 className={`text-5xl font-bold ${colors.text} mb-4`}>{category.name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{category.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <ExternalLink size={16} />
                    <span>Website: {category.website}</span>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.products.map((productGroup, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`${colors.bg} text-white p-6`}>
                        <h3 className="text-2xl font-bold flex items-center space-x-2">
                          <Shield size={24} />
                          <span>{productGroup.category}</span>
                        </h3>
                      </div>
                      
                      <div className="p-6">
                        <div className="space-y-4">
                          {productGroup.items.map((item, itemIndex) => (
                            <div key={itemIndex} className={`flex items-start space-x-3 p-4 rounded-lg ${colors.hover} transition-all duration-300 group`}>
                              <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brand Features */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center space-x-2">
                    <Award className={colors.text} size={24} />
                    <span>Why Choose {category.name}?</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {key === 'rud' && (
                      <>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-blue-600 mb-2">German</div>
                          <div className="text-gray-600">Engineering Excellence</div>
                          <div className="text-sm text-gray-500 mt-2">Grade 100 & 120 certified</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-blue-600 mb-2">CE</div>
                          <div className="text-gray-600">Certified Quality</div>
                          <div className="text-sm text-gray-500 mt-2">European standards</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-blue-600 mb-2">Safety</div>
                          <div className="text-gray-600">First Priority</div>
                          <div className="text-sm text-gray-500 mt-2">Lifting & conveying</div>
                        </div>
                      </>
                    )}
                    
                    {key === 'ferreterro' && (
                      <>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-orange-600 mb-2">Polyester</div>
                          <div className="text-gray-600">Premium Materials</div>
                          <div className="text-sm text-gray-500 mt-2">Flat & round slings</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-orange-600 mb-2">Flexible</div>
                          <div className="text-gray-600">Versatile Solutions</div>
                          <div className="text-sm text-gray-500 mt-2">Multiple configurations</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-orange-600 mb-2">Durable</div>
                          <div className="text-gray-600">Long-lasting Performance</div>
                          <div className="text-sm text-gray-500 mt-2">Weather resistant</div>
                        </div>
                      </>
                    )}
                    
                    {key === 'kito' && (
                      <>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-yellow-600 mb-2">Japanese</div>
                          <div className="text-gray-600">Precision Engineering</div>
                          <div className="text-sm text-gray-500 mt-2">125kgs to 20t capacity</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-yellow-600 mb-2">Electric</div>
                          <div className="text-gray-600">Chain & Wire Rope</div>
                          <div className="text-sm text-gray-500 mt-2">Multiple hoist types</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-yellow-600 mb-2">Reliable</div>
                          <div className="text-gray-600">Proven Performance</div>
                          <div className="text-sm text-gray-500 mt-2">Manual & electric options</div>
                        </div>
                      </>
                    )}
                    
                    {key === 'crosby' && (
                      <>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-red-600 mb-2">American</div>
                          <div className="text-gray-600">Heritage Quality</div>
                          <div className="text-sm text-gray-500 mt-2">Trusted worldwide</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-red-600 mb-2">Forged</div>
                          <div className="text-gray-600">Superior Strength</div>
                          <div className="text-sm text-gray-500 mt-2">Shackles & hardware</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-red-600 mb-2">Tested</div>
                          <div className="text-gray-600">Quality Assured</div>
                          <div className="text-sm text-gray-500 mt-2">Rigorous standards</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Expert Recommendation */}
                <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-2">Expert Recommendation</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With 24 years of industrial experience including 18 years of specialized Material Handling 
                        expertise, our director L. Karthick recommends {category.name} products for their proven 
                        reliability, safety standards, and performance in demanding industrial applications across 
                        Industrial, Wind, Power, and Auto sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing the Right Product?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experienced team, led by our director with 24 years of industrial expertise, can help you 
            select the perfect material handling solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300">
              Technical Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;