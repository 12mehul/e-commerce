"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

import { useCart } from "../../contexts/CartContext";

const ProductDetail = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({...product,quantity:1});
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setProduct(response.data));
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <img
            src={product.image}
            width={300}
            height={300}
            alt={product.title}
            className=" h-auto"
          />
          <h2 className="text-3xl font-bold mt-4">{product.title}</h2>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button onClick={handleAddToCart} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
