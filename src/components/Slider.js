// components/Slider.js

import React from 'react';

const Slider = () => {
  // You can replace the content with your product data
  const products = ['Protein Product 1', 'Protein Product 2', 'Food Supplement 1', 'Food Supplement 2'];

  return (
    <div className="slider">
      <h2>Featured Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
