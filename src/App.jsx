import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';
import ProductCard from './components/ProductCard';

const categories = ['All', 'Men', 'Women', 'Accessories'];

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Filter By Category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  //  Sort by price
  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a,b) => b.price - a.price);
  }

  return (
  <div className="bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">TrendyShop Products</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border font-semibold
                ${selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border-blue-500'}
                hover:shadow-md hover:bg-blue-600 hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-6">
          <select
            onChange={e => setSortOrder(e.target.value)}
            value={sortOrder}
            className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded-md text-gray-700"
          >
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
