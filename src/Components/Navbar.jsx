import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
      return (
            <section className="w-full fixed top-0 left-0 z-50 bg-white backdrop-blur-md shadow-md">
                  <nav className='container' data-aos="zoom-in" data-aos-delay="100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="flex justify-between items-center h-16">

                                    {/* <!-- Logo --> */}
                                    <div className="flex-shrink-0 text-green-400 font-bold text-xl flex items-center gap-2">
                                          <FaShoppingCart className="w-9 h-9 p-2 rounded-full bg-green-400 text-white" />
                                          <a href="#">Fresh<span className="text-red-400">Cart</span></a>
                                    </div>

                                    {/* <!-- Desktop Menu --> */}
                                    <div className="hidden md:flex space-x-8 text-gray-400 font-medium capitalize">
                                          <a href="#" className="hover:text-orange-400 transition">premiun Groceries</a>
                                          <a href="#" className="hover:text-orange-400 transition">meal kits</a>
                                          <a href="#" className="hover:text-orange-400 transition">express delivery</a>
                                          <a href="#" className="hover:text-orange-400 transition">weekly deals</a>
                                          <a href="#" className="hover:text-orange-400 transition">customers</a>
                                    </div>

                                    {/* <!-- Call to Action --> */}
                                    <div className="hidden md:block">
                                          <a href="#" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-orange-500 transition-all">
                                                Download App
                                          </a>
                                    </div>

                                    {/* <!-- Mobile Menu Button --> */}
                                    <div className="md:hidden flex items-center">
                                          <button id="menu-toggle" className="text-gray-400 focus:outline-none">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                        </div>

                        {/* <!-- Mobile Menu --> */}
                        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 capitalize">
                              <a href="#" className="block py-2 text-gray-400 hover:text-orange-400">premiun Groceries</a>
                              <a href="#" className="block py-2 text-gray-400 hover:text-orange-400">meal kits</a>
                              <a href="#" className="block py-2 text-gray-400 hover:text-orange-400">express delivery</a>
                              <a href="#" className="block py-2 text-gray-400 hover:text-orange-400">weekly deals</a>
                              <a href="#" className="block py-2 text-gray-400 hover:text-orange-400">customers</a>
                              <a href="#" className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md text-center hover:from-pink-500 hover:to-orange-500 transition-all">Download App</a>
                        </div>
                  </nav>

            </section>
      )
}

export default Navbar