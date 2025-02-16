import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]); // State to store products

  // Fetch products from the backend API
  useEffect(() => {
    fetch('http://127.0.0.1:3000/products') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Product Listing</h1>
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-item">
                <h2>{product.name}</h2>
                <p>ID: {product.id}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
