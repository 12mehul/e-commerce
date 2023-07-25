"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import ProductList from "../components/ProductsList/page";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) =>  setProducts(response))
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <section className="flex items-center py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl mb-8">All Products</h2>
          <ProductList products={products} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
