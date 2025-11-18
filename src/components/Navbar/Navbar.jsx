import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Shop Fresh', href: '#shop' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'About', href: '#about' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-gray-300/95 backdrop-blur-3xl">
     
      <nav className="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        
   
        <a href="#" className="flex items-center space-x-2 text-3xl font-extrabold tracking-tight text-gray-900">
          <span className="text-4xl  text-orange-500">G</span>
          <span className="text-2xl font-light text-gray-800">rOcify</span>
        </a>

        
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-base font-semibold text-gray-600 hover:text-orange-700 transition duration-300 ease-in-out uppercase tracking-wider"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className=' p-1 border-orange-500 border-4 rounded-full'>
            <input type="text" name='text' id='text' placeholder='Search....' autoComplete='off'
            className='flex-1 h-[5vh] px-3 bg-gradient-to-b from-zinc-400 to-yellow-500 rounded-full focus:outline-none' />
            <button className=' text-orange-700 rounded-full '>
                <FaSearch className='pt-2 w-10 h-7' />
            </button>
        </div>

      
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-blue-400 transition duration-200 p-2 rounded-full hover:bg-emerald-50 relative">
            <User className="w-6 h-6" />
          </button>
          <button className="text-gray-700 hover:text-orange-600 transition duration-200 p-2 rounded-full hover:bg-emerald-50 relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">3</span>
          </button>
          
    
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 hover:text-purple-600 transition duration-200 focus:outline-none p-2 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-2 border-t border-gray-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-4 pb-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                onClick={toggleMenu}
                className="block py-2 px-3 text-lg font-medium text-gray-700 rounded-lg hover:bg-emerald-50 hover:text-orange-700 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const App = () => (
  <div className="min-h- bg-gray-50 font-sans">
    <Navbar />

    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to GrOcify</h1>
        <p className="text-gray-700 max-w-3xl mb-8">
            Experience the freshest groceries delivered right to your door. We focus on quality, sustainability, and supporting local farms. Scroll down to see the header stick!
        </p>
        <div className="h-[200vh] bg-gray-100 rounded-xl p-8">
            <p className="text-gray-500">Scrollable content area...</p>
            <img className=' min-h-screen rounded-b-full pt-8' src="https://wallpapers.com/images/hd/grocery-items-circular-shape-31er4lglfoaqy7gb.jpg" alt="" />

            <h1 className='pt-10 font-bold text-4xl text-purple-600 bg-gradient-to-b rounded-full justify-center items-center flex pb-8 from-zinc-400 to-yellow-500 '>
              Top Quality Food For your Health
            </h1>

            {/* <img  className="w-[100vh]  pt-50"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1662Piku-nq8xa6UYuA0VopW-0SPo92XtD78q-jTiM5wVMuaT_HiQ7-M8TSOR-EWwCY&usqp=CAU" alt="" /> */}
        </div>
    </main>
  </div>
);

export default App;
