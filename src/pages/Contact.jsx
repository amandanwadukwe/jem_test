import React from 'react';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Footer';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="text-gray-600 space-y-2">
              <p>Just Education Matters CIC</p>
              <p>Kemp House</p>
              <p>152-160 City Road</p>
              <p>LONDON EC1V 2NX</p>
              <p className="pt-2">Telephone: 07936 449 834</p>
              <p>Email: <a href="mailto:info@justeducationmatters.org" className="text-purple-500 hover:underline">info@justeducationmatters.org</a></p>
              <p>Web: <a href="https://www.justeducationmatters.org" className="text-purple-500 hover:underline">www.justeducationmatters.org</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-medium mb-6 text-center lg:text-left">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-none"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-8 py-2 rounded-full hover:bg-purple-600 transition duration-300"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
