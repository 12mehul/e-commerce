'use client'
import Link from 'next/link'
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../../contexts/CartContext';
const Navbar = () => {
  const { isCartOpen, closeCart, openCart } = useCart();
  const handleCartClick = () => {
    if (isCartOpen) {
      closeCart();
    } else {
      openCart();
    }
  };
  return (
    <section className="relative bg-gray-100 border-b font-poppins dark:bg-gray-800 dark:border-gray-800">
    <div className="container mx-auto">
        <nav className="flex justify-between">
            <div className="flex items-center justify-between w-full py-2 space-x-4 mx-2">
                <Link href="/" className="text-2xl text-gray-700 dark:text-gray-400">Logo</Link>
                <ul className="font-medium flex space-x-6">
                    <li><Link href="/"
                            className="text-gray-700 hover:text-gray-600 dark:text-gray-400">Home</Link>
                    </li>
                    <li><Link href="/products"
                            className="text-gray-700 hover:text-gray-600 dark:text-gray-400">Products</Link>
                    </li>
                </ul>
                <div className="items-center justify-end flex dark:text-gray-400">
                    <button onClick={handleCartClick} className=" text-2xl">
                        <BsCart4 />
                    </button>
                </div>
            </div>
        </nav>
    </div>
</section>
  )
}

export default Navbar
