import React from 'react'

const Footer = () => {
  return (
    
    <footer className='bg-gray-900 py-24'>
        
        <div className='flex flex-wrap max-w-7xl mx-auto px-6 md:px-10 lg:px-12 gap-12 text-white'>

            
            <div className='flex-1 min-w-[300px]'>
             <a href="#" className="flex items-center space-x-2 text-4xl font-extrabold tracking-tight">
          
          <span className="text-5xl text-orange-500">G</span>
          <span className="text-3xl font-light text-gray-200">rOcify</span>
        </a>

        <p className='text-gray-400 mt-6 max-w-[350px] text-lg'>
            Bred for a high content of beneficial substances. Our products are all **fresh** and **healthy**.</p>

            <p className='text-gray-500 text-sm font-semibold uppercase mt-8'>
                2025 &copy; all rights reserved
            </p>
        </div>

        {/* --- Company Links --- */}
        <ul className='flex-1 min-w-[150px]'>
            <li>
                <h5 className='text-gray-200 font-bold text-xl mb-6 border-b-2 border-orange-500 inline-block pb-1'>
                    Company
                </h5>
                <li className='mt-4'>
                    {/* Subtle hover effect for links */}
                    <a href="#" className='hover:text-orange-500 text-gray-400 transition duration-300'>About</a>
                </li>
            </li>
            <li className='mt-4'>
                    <a href="#" className='hover:text-orange-500 text-gray-400 transition duration-300'>FAQ'S</a>
                </li>
        </ul>

        {/* --- Support Links --- */}
        <ul className='flex-1 min-w-[150px]'>
            <li>
                <h5 className='text-gray-200 font-bold text-xl mb-6 border-b-2 border-orange-500 inline-block pb-1'>
                    Support
                </h5>
                <li className='mt-4'>
                    <a href="#" className='hover:text-orange-500 text-gray-400 transition duration-300'>Support Center</a>
                </li>
            </li>
            <li className='mt-4'>
                    <a href="#" className='hover:text-orange-500 text-gray-400 transition duration-300'>FeedBack</a>
                </li>
                <li className='mt-4'>
                    <a href="#" className='hover:text-orange-500 text-gray-400 transition duration-300'>Contact Us</a>
                </li>
        </ul>

       
        <div className='flex-1 min-w-[250px]'>
            <h5 className='text-gray-200 text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-1'>
           Stay Connected</h5>

            <p className='mt-6 text-gray-400 mb-6'>
                Subscribe to our newsletter for exclusive offers and fresh updates.
            </p>
            

            {/* Input Group for Newsletter - Stylized */}
            <div className="flex w-full max-w-md">
                <input 
                    type="email" 
                    placeholder='Your email address'
                    className='py-3 px-4 w-full rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <button 
                    type="submit"
                    className='py-3 px-5 bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-r-lg text-white font-semibold'
                >
                    Join
                </button>
            </div>

            {/* Social Media Icons (Adding for style/completeness) */}
             <div className="mt-8 flex space-x-4">
                
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300 text-2xl" title="Facebook">
                    {/* Placeholder for a Facebook Icon */}
                    <i className="fab fa-facebook-f">Facebook</i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300 text-2xl" title="Instagram">
                    {/* Placeholder for an Instagram Icon */}
                    <i className="fab fa-instagram">Instagram</i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300 text-2xl" title="Twitter">
                    {/* Placeholder for a Twitter Icon */}
                    <i className="fab fa-twitter">linkedin</i>
                </a>
             </div>
        </div>


        </div>


    </footer>
  )
}

export default Footer