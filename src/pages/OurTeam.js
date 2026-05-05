import React from 'react';

const Viewora = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Viewora</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Design-first eyewear and curated collections for individuals who want premium style and unforgettable confidence.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-gray-50 rounded-3xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Design-first, premium aesthetics</h3>
              <p className="text-gray-600">Every frame is chosen for style, detail, and visual impact.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Strong visual identity</h3>
              <p className="text-gray-600">Our collections are built to support a consistent premium brand presence.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Curated collections</h3>
              <p className="text-gray-600">We choose pieces that feel modern, wearable, and memorable.</p>
            </div>
          </div>

          <div className="bg-primary text-white rounded-3xl p-10 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Viewora Style Rewards</h2>
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
          <h2 className="text-3xl font-bold">Viewora – Let's create something iconic together…….</h2>
        </div>
      </section>
    </div>
  );
};

export default Viewora;