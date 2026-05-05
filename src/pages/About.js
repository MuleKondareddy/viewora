import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Viewora</h1>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Crafting premium eyewear experiences that blend style, quality, and confidence.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Viewora was born from a simple belief: eyewear should do more than just correct vision - it should enhance confidence, express personality, and make a statement.
          </p>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10">
            We are a team of creators, stylists, and visual thinkers who bring curated eyewear collections to life through thoughtful design and premium execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-primary mb-2">Premium</div>
              <p className="text-gray-700 font-semibold">Sunglasses</p>
              <p className="text-sm text-gray-600 mt-2">Carefully curated designs for style and protection.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-primary mb-2">UV+</div>
              <p className="text-gray-700 font-semibold">Protected</p>
              <p className="text-sm text-gray-600 mt-2">Advanced protection against harmful UV rays.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-primary mb-2">Durable</div>
              <p className="text-gray-700 font-semibold">Frames</p>
              <p className="text-sm text-gray-600 mt-2">Lightweight and built for long-lasting wear.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-primary mb-2">Trend</div>
              <p className="text-gray-700 font-semibold">Designs</p>
              <p className="text-sm text-gray-600 mt-2">Fashion-forward styles for statement looks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Viewora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/mission"
              className="block p-8 bg-white rounded-3xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">Discover how we deliver design-first eyewear that helps you look sharper, feel confident, and stand out.</p>
            </Link>
            <Link
              to="/team"
              className="block p-8 bg-white rounded-3xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-gray-600">Meet the creative experts behind every Viewora collection.</p>
            </Link>
            <Link
              to="/viewora"
              className="block p-8 bg-white rounded-3xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">Why Viewora</h3>
              <p className="text-gray-600">See what makes Viewora different: curated collections, premium quality, and modern style.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
