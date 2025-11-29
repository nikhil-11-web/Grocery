import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Defined IDs instead of hrefs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Shop Fresh', id: 'shop' },
    { name: 'Recipes', id: 'recipes' },
    { name: 'About', id: 'about' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 2. Smooth Scroll Function
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent default anchor jump
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      
      <nav className="flex items-center justify-between max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">

        {/* Logo - Scrolls to Home */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-1 z-20 cursor-pointer"
        >
          <span className="text-4xl font-extrabold text-orange-600">G</span>
          <span className="text-2xl font-light text-gray-800 tracking-tight">rOcify</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors duration-300 uppercase tracking-widest relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative group w-64 lg:w-80">
          <input 
            type="text" 
            placeholder="Search groceries..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-100 border-2 border-transparent focus:bg-white focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
          <button type="submit" className="absolute right-2 p-1.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-transform active:scale-95">
            <Search size={16} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4 z-20">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="md:hidden text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition">
            <Search className="w-6 h-6" />
          </button>
          <button className="hidden sm:flex text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all">
            <User className="w-6 h-6" />
          </button>
          <button className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 p-2 rounded-full transition-all relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">3</span>
          </button>
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-orange-600 p-2 rounded-lg focus:outline-none">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Search Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
         <form onSubmit={handleSearchSubmit} className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <div className="relative">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500" />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-600 p-1"><Search size={20} /></button>
            </div>
         </form>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <ul className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={(e) => scrollToSection(e, item.id)}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className="sm:hidden border-t border-gray-100 pt-2 mt-2">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-lg font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <User size={20} /> Account
            </button>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;