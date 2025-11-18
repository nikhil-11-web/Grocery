import React from 'react';
import { ShoppingCart } from 'lucide-react';


const Hero = () => {
  
  
  const premiumButtonClasses = 
    'flex items-center space-x-3 px-8 py-4 text-xl font-bold rounded-full ' +
    'bg-orange-600 text-white ' +
    'shadow-xl shadow-orange-400/50 ' + 
    'hover:bg-orange-700 ' +
    'transition duration-300 transform hover:scale-[1.02] active:scale-95 ' +
    'mt-8'; 

  return (
    <section className='pt-12 pb-16 bg-gray-50'>
      <div className='max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between'>
        
      
        <div className='lg:w-1/2 mb-10 lg:mb-0'>
          
   
          <span className='inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 shadow-inner'>
            Export Best Quality...
          </span>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight'>
            Tasty Organic <span className='text-orange-600'>Fruits</span> & <span className='text-orange-600'>Veggies</span> In Your City
          </h1>
        
          <p className='text-lg md:text-xl text-zinc-600 pt-5 max-w-lg'>
            Bred for a high content of beneficial substances. Our products are all fresh, healthy, and delivered right to your door.
          </p>

        
          <button className={premiumButtonClasses}>
            <ShoppingCart className='w-6 h-6' />
            <span>Shop Now & Get 15% Off</span>
          </button>

        </div>

       
        <div className='lg:w-1/2 flex justify-center items-center relative'>
          
          <div className='relative p-4 bg-white rounded-full shadow-2xl'>
            <img 
              className=' h-[80vh] object-cover rounded-full transition-transform duration-500 hover:scale-[1.03] transform' 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59yREJzR_tJQw6iMMfWvpvfW-ZeTUw9d3xTbGwCIzf-S6l25HCEXxW3sMQmre8B1HlAA&usqp=CAU" 
              alt="Assorted Fresh Fruits and Vegetables" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/fecaca/9a3412?text=Fresh+Produce+Basket" }}
            />
          
            <div className='absolute bottom-8 right-0 p-5 bg-orange-600 text-white rounded-lg shadow-lg rotate-3 hidden sm:block'>
                <p className='text-sm font-bold'>Fresh Daily!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
