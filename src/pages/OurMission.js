import React from 'react';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            To deliver high-quality, design-first eyewear that helps people look sharper, feel confident, and stand out—without compromise.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 mb-12">
            At Viewora, our mission goes beyond selling eyewear. We're committed to creating a complete experience that reflects premium quality, attention to detail, and your satisfaction at every step.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Design-First Approach</h3>
            <p className="text-gray-700">
              Every eyewear piece is selected with precision for style, detail, and visual impact—ensuring you don't just see clearly, you look amazing.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Without Compromise</h3>
            <p className="text-gray-700">
              From UV-protected lenses to lightweight durable frames, every product is engineered for comfort and long-lasting wear.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidence Through Style</h3>
            <p className="text-gray-700">
              We believe eyewear should enhance your confidence and express your personality, helping you stand out in any setting.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Experience</h3>
            <p className="text-gray-700">
              From product selection to final delivery, every step is designed with care to reflect our commitment to excellence.
            </p>
          </div>
          </div>

          <div className="bg-primary text-white rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="mb-4">On every purchase of ₹5,000 or more, receive a ₹500 voucher.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Voucher is valid for 3 months from the date of issue.</li>
              <li>Applicable on your next purchase.</li>
              <li>Great style should always come back with more.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Quality & Experience</h2>
            <p className="text-gray-600 mb-4">At Viewora, we don’t just sell eyewear—we create a complete experience. From product selection to final delivery, every step is designed to reflect premium quality, attention to detail, and customer satisfaction.</p>
            <p className="text-gray-600">Our focus is on comfort, style, and long-lasting value so your eyewear feels premium every time you wear it.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Viewora – Let's create something iconic together……</h2>
        </div>
      </section>
    </div>
  );
};

export default OurMission;