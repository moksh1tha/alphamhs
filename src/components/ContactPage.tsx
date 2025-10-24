import React from 'react';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDirections = () => {
    const address = "No.8, 3rd Street, Siva Sakthi Nagar, Korattur, Chennai - 600 080, Tamil Nadu, India";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-black">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our material handling experts. We're here to help you find the perfect solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ready to enhance your material handling operations? Contact Alpha MHS today for expert consultation 
                  and premium solutions tailored to your specific requirements.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        No.8, 3rd Street, Siva Sakthi Nagar,<br />
                        Korattur, Chennai - 600 080,<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <button 
                          onClick={() => handlePhoneCall('+917010203064')}
                          className="block text-gray-600 hover:text-orange-500 transition-colors duration-300"
                        >
                          +91 7010203064
                        </button>
                        <button 
                          onClick={() => handlePhoneCall('+917904469270')}
                          className="block text-gray-600 hover:text-orange-500 transition-colors duration-300"
                        >
                          +91 7904469270
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Email Addresses</h3>
                      <div className="space-y-1">
                        <button
                          onClick={() => handleEmailClick('sales@alphamhs.in')}
                          className="block text-gray-600 hover:text-orange-500 transition-colors duration-300"
                        >
                          sales@alphamhs.in
                        </button>
                        <button 
                          onClick={() => handleEmailClick('alphamhs25@gmail.com')}
                          className="block text-gray-600 hover:text-orange-500 transition-colors duration-300"
                        >
                          alphamhs25@gmail.com
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Director Information */}
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-100">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center space-x-2">
                  <User className="text-orange-500" size={24} />
                  <span>Director</span>
                </h3>
                <p className="text-gray-700 font-semibold">L. Karthick</p>
                <p className="text-gray-600 text-sm mt-2">
                  Leading Alpha MHS with 24 years of industrial experience and expertise in material handling solutions.
                </p>
              </div>
            </div>

            {/* Company Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-8">About Alpha MHS</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                  <h3 className="text-xl font-bold text-black mb-4">Our Expertise</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete Material Handling solution provider</li>
                    <li>• 24 years of industrial experience</li>
                    <li>• 18 years specialized MH expertise with German MNC</li>
                    <li>• Authorized dealer for 4 premium brands</li>
                    <li>• Safety-focused approach</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-4">Sectors We Serve</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-1">🏭</div>
                      <div className="text-sm font-medium text-gray-700">Industrial</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-1">🌪️</div>
                      <div className="text-sm font-medium text-gray-700">Wind Power</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-sm font-medium text-gray-700">Power</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-1">🚗</div>
                      <div className="text-sm font-medium text-gray-700">Automotive</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-black mb-4">Our Brands</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <img src="/Screenshot 2025-06-23 210419.png" alt="RUD" className="h-6 w-auto" />
                      <span className="text-sm text-gray-600">RUD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/Screenshot 2025-06-23 210429.png" alt="Ferreterro" className="h-6 w-auto" />
                      <span className="text-sm text-gray-600">Ferreterro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/Screenshot 2025-06-23 210435.png" alt="Kito" className="h-6 w-auto" />
                      <span className="text-sm text-gray-600">Kito</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/Screenshot 2025-06-23 210442.png" alt="Crosby" className="h-6 w-auto" />
                      <span className="text-sm text-gray-600">Crosby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office in Chennai for personalized consultation and product demonstrations
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg inline-block border border-gray-100">
              <MapPin className="text-orange-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-black mb-4">Alpha MHS Office</h3>
              <p className="text-gray-600 text-lg">
                No.8, 3rd Street, Siva Sakthi Nagar,<br />
                Korattur, Chennai - 600 080,<br />
                Tamil Nadu, India
              </p>
              <div className="mt-6">
                <button 
                  onClick={handleDirections}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Alpha MHS today for expert consultation on your material handling requirements. 
            Let's discuss how we can help improve your operations with our premium solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePhoneCall('+917010203064')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call Now: +91 7010203064
            </button>
            <button
              onClick={() => handleEmailClick('sales@alphamhs.in')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
            >
              Email: sales@alphamhs.in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;