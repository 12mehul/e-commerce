"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-8">All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Link href={`/product/${product.id}`} key={product.id} passHref>
                <div className="border border-gray-200 rounded overflow-hidden hover:shadow-lg cursor-pointer">
                  <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
                  <div className="p-4 h-24">
                    <h3 className="font-semibold text-lg truncate">{product.title}</h3>
                    <p className="mt-1 text-gray-500">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
};

export default Products;
