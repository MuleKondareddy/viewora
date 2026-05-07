import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-primary text-white py-24">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-100">VIEWORA Eyewear</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Premium sunglasses and optical frames crafted for clarity, comfort, and style.
              </h1>
              <p className="text-lg text-blue-100 max-w-xl">
                Explore modern eyewear collections with effortless designs, durable materials, and a polished finish for every look.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-gray-100"
                >
                  Shop Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl ring-1 ring-white/20">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4 rounded-3xl bg-white/15 p-6">
                  <h2 className="text-xl font-bold">Style that stands out</h2>
                  <p className="text-sm text-blue-100">
                    Handpicked eyewear for a polished everyday wardrobe.
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl bg-white/15 p-6">
                  <h2 className="text-xl font-bold">Quality you can trust</h2>
                  <p className="text-sm text-blue-100">
                    Premium materials, strong build, and comfortable fit.
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl bg-white/15 p-6">
                  <h2 className="text-xl font-bold">Fast shipping</h2>
                  <p className="text-sm text-blue-100">
                    Ready to ship and delivered right to your door.
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl bg-white/15 p-6">
                  <h2 className="text-xl font-bold">Designed to please</h2>
                  <p className="text-sm text-blue-100">
                    A selection built to suit modern style and everyday comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Start with a fresh look</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              A modern eyewear experience made simple.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Browse a curated collection of frames, sunglasses, and lenses. Home is now your launchpad for shopping the full range.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Sunglasses</h3>
              <p className="text-gray-700">
                Fashion-forward designs crafted for both everyday wear and statement looks.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UV-Protected Lenses</h3>
              <p className="text-gray-700">
                Advanced protection against harmful UV rays with crystal-clear optical quality.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightweight & Durable</h3>
              <p className="text-gray-700">
                Engineered for comfort with materials that resist daily wear and maintain shape.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trend-Driven Designs</h3>
              <p className="text-gray-700">
                Modern styles that keep pace with the latest trends and stand the test of time.
              </p>
            </div>
          </div>
        </div>
        <section className="py-16 bg-primary text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Viewora – Let's create something iconic together……</h2>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
