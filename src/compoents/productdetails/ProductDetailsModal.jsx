import React from 'react';

const ProductDetailsModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.image} alt="" />
        <p>New Price: {product.new_prices}</p>
        <p>Old Price: {product.old_prices}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
