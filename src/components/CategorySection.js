// components/CategorySection.js

import React from 'react';

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Categories</h2>
      <div className="category-boxes">
        <div className="category-box" style={{ backgroundColor: 'red' }}>
          Vitamins
        </div>
        <div className="category-box" style={{ backgroundColor: 'blue' }}>
          Medicine
        </div>
        <div className="category-box" style={{ backgroundColor: 'green' }}>
          Home Healthcare
        </div>
        <div className="category-box" style={{ backgroundColor: 'yellow' }}>
          Omega
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
