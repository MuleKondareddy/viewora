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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Premium Collection</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Viewora offers a curated range of fashion-forward eyewear designed for both everyday wear and statement looks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-sm border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">Premium Sunglasses</h3>
              <p className="text-gray-700">Crafted with precision and style for every occasion, from casual outings to sophisticated events.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-sm border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">UV-Protected Lenses</h3>
              <p className="text-gray-700">Advanced protection against harmful UV rays while maintaining crystal-clear vision and optical quality.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-sm border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">Lightweight & Durable Frames</h3>
              <p className="text-gray-700">Engineered for comfort and longevity with materials that resist daily wear and maintain their shape.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-sm border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">Trend-Driven Designs</h3>
              <p className="text-gray-700">Fashion-forward styles that keep pace with the latest trends while standing the test of time.</p>
            </div>
          </div>

          <div className="bg-primary text-white rounded-3xl p-10 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Viewora Style Rewards</h2>
            <p className="mb-4">On every purchase of Rs 5,000 or more, receive a Rs 500 voucher.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Voucher is valid for 3 months from the date of issue.</li>
              <li>Applicable on your next purchase.</li>
              <li>Great style should always come back with more.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-accent to-primary text-white p-10 shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">Quality & Experience</h2>
            <p className="mb-4">Each product is selected with a focus on style, comfort, and long-lasting quality. At Viewora, we ensure you get more than just a good look—you get confidence.</p>
            <p>From product selection to final delivery, every step is designed to reflect premium quality, attention to detail, and customer satisfaction.</p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">What Makes Viewora Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design-First Philosophy</h3>
                <p className="text-gray-600">Every frame is chosen for style, detail, and visual impact.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Curated Collections</h3>
                <p className="text-gray-600">We choose pieces that feel modern, wearable, and memorable.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Lightweight frames, UV-protected lenses, and durable construction for everyday confidence.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Customer Focused</h3>
                <p className="text-gray-600">We create a complete experience with attention to every detail and your satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Viewora - Let's create something iconic together....</h2>
        </div>
      </section>
    </div>
  );
};

export default Viewora;
