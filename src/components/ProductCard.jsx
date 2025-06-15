import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-sm p-4 flex flex-col bg-white hover:shadow-lg transition">
            <img 
            src={product.image} 
            alt={product.name} 
            className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-1">£{product.price}</p>   
            <p className="text-blue-600 text-sm">{product.category}</p>
        </div>
    );
};

export default ProductCard;


