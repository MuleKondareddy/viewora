import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { SearchIcon } from '@heroicons/react/solid';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;

      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products</h1>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Browse our premium eyewear collection. Filter by style, price, and category to find the perfect frame.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto mb-8">
            <SearchIcon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for glasses, frames, lenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded transition ${
                          selectedCategory === category
                            ? 'bg-primary text-white font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b">
                  <h4 className="font-semibold text-gray-800 mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Min: ${priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Max: ${priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Products');
                    setPriceRange([0, 300]);
                    setSortBy('featured');
                  }}
                  className="w-full btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'All Products' ? 'All Products' : selectedCategory}
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field w-full md:w-48"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">No products found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Products');
                      setPriceRange([0, 300]);
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
