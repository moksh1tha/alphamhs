import React from 'react';
import { Award, Target, Users, Wrench, CheckCircle, Globe, Building, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2001', title: 'Director Begins Industrial Journey', description: 'L. Karthick starts his career in industrial products' },
    { year: '2007', title: 'German MNC Partnership', description: 'Gained 18 years of specialized MH expertise working with German multinational' },
    { year: '2015', title: 'Authorized Dealerships Secured', description: 'Became authorized dealer for premium international brands' },
    { year: '2025', title: 'Alpha MHS Established', description: 'Founded Alpha MHS as premier material handling solutions provider' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Safety First',
      description: 'We prioritize safety in every solution we provide, ensuring zero-compromise on workplace security with certified products.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Partnering with world-renowned brands RUD, Ferreterro, Kito, and Crosby to deliver only the highest quality products.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term relationships through dedicated service and support across Industrial, Wind, Power, and Auto sectors.'
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description: 'Director\'s 24 years of industrial experience including 18 years of specialized MH expertise ensuring optimal solutions.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Certified Operations',
    'Authorized RUD Dealer - Chain Slings & Lifting Points',
    'Certified Ferreterro Partner - Polyester Slings',
    'Official Kito Distributor - Electric & Manual Hoists',
    'Crosby Authorized Dealer - Shackles & Hardware'
  ];

  const expertise = [
    'Grade 100 & 120 Chain Slings & Components',
    'Polyester Flat & Round Webbing Slings',
    'Electric Chain Hoist (125kgs to 20t)',
    'Wire Rope Hoist (3t, 5t & 10t)',
    'Manual Chain Pulley Block (250kgs to 20t)',
    'Shackles, Turnbuckles & Lifting Hardware'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-black">About Alpha MHS</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in material handling solutions with expert leadership and premium international partnerships
            </p>
          </div>
        </div>
      </section>

      {/* About Alpha MHS - Orange Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 text-white rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="text-white" size={32} />
                  <h2 className="text-4xl font-bold">About Alpha MHS</h2>
                </div>
                <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                  <p>
                    <strong>Alpha MHS</strong> stands as a premier industrial dealer specializing in Material Handling products, 
                    established in 2025 and based in Chennai, Tamil Nadu. We are dedicated to providing high-quality 
                    Material Handling solutions to businesses across the Industrial, Wind, Power, and Auto sectors.
                  </p>
                  <p>
                    As a complete solution provider for Material Handling, we keep safety on prioritization, 
                    ensuring every product and service meets the highest international standards.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Company Highlights</h3>
                <div className="space-y-4">
                  {[
                    'Established 2025 in Chennai, Tamil Nadu',
                    'Complete Material Handling solution provider',
                    'Safety-focused approach in all operations',
                    'Authorized dealer for 4 premium international brands',
                    'Serving Industrial/Wind/Power/Auto sectors',
                    'Expert leadership with 24 years experience'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-white flex-shrink-0" size={20} />
                      <span className="text-white/90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Alpha MHS was founded in 2025 by Director L. Karthick, who brings an impressive 24 years 
                  of comprehensive industrial experience to the company. This includes 18 years of specialized 
                  expertise in Material Handling gained while working with a German multinational corporation.
                </p>
                <p>
                  Our director's extensive background in industrial products, combined with deep technical 
                  knowledge of material handling systems, positions Alpha MHS as a trusted advisor and 
                  solution provider in the industry.
                </p>
                <p>
                  As an authorized dealer for industry-leading brands including RUD, Ferreterro, Kito, 
                  and Crosby, we ensure that our clients receive only the highest quality products backed 
                  by world-class engineering, reliability, and comprehensive support.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Our Expertise</h3>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-all duration-300 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Alpha MHS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center border border-gray-100">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our director's path to establishing Alpha MHS as a trusted material handling solutions provider
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-500 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Certifications & Partnerships</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                    <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Leadership</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">L. Karthick</h3>
                  <p className="text-orange-500 font-semibold mb-4">Director & Founder</p>
                  <div className="space-y-3 text-gray-600 leading-relaxed">
                    <p>
                      Leading Alpha MHS with 24 years of comprehensive industrial experience, 
                      including 18 years of specialized expertise in Material Handling gained 
                      while working with a German multinational corporation.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <p className="text-sm font-semibold text-orange-600 mb-2">Experience Highlights:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 24 years total industrial experience</li>
                        <li>• 18 years MH expertise with German MNC</li>
                        <li>• Deep technical knowledge of lifting solutions</li>
                        <li>• Safety-focused approach to operations</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-sm text-gray-500">Contact: +91 7904469270 / 7010203064</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Target className="text-white mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide comprehensive, safe, and reliable material handling solutions that enhance 
                  operational efficiency while maintaining the highest standards of safety and quality across 
                  Industrial, Wind, Power, and Auto sectors.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Globe className="text-white mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be the leading material handling solutions provider in South India, recognized for 
                  innovation, reliability, and unwavering commitment to customer success through premium 
                  international partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;