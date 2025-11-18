import React from 'react'
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";


const VALUES_DATA = [
  {
    id: 1,
    title: "Trust & Transparency",
    description: "We build lasting relationships based on honesty. Every product's origin and quality journey is clear.",
    icons: <FaHeart />
  },
  {
    id: 2,
    title: "Always Fresh",
    description: "Sourced daily and delivered promptly. We ensure you receive produce at its peak flavor and nutritional value.",
    icons: <FaLeaf />
  },
  {
    id: 3,
    title: "Food Safety First",
    description: "Our processes adhere to the highest standards, guaranteeing that every item is safe, clean, and meticulously handled.",
    icons: <FaShieldAlt/>
  },
  {
    id: 4,
    title: "Sustainably Sourced",
    description: "We partner with local farms practicing sustainable agriculture to protect the planet and support communities.",
    icons: <FaSeedling/>
  },
];


const ValueCard = ({ title, description, icons }) => {
    return (
       
        <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col items-center text-center'>
            
            <div className='w-16 h-16 bg-orange-100 shadow-blue-300 text-orange-600 rounded-full flex items-center justify-center mb-4 text-3xl'>
                {icons}
            </div>
            
            <h3 className='text-xl border-gray-500  font-bold text-gray-800 mb-3'>{title}</h3>
            <p className='text-gray-500  text-sm'>{description}</p>
        </div>
    )
}


const Values = () => {

    const renderCARDS = VALUES_DATA.map((value) => (
        <ValueCard
            key={value.id}
            title={value.title}
            description={value.description}
            icons={value.icons}
        />
    ))

    return (
        <section>
            <div className='bg-gray-50'>
                <div className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    
               
                    <div className='w-fit mx-auto text-center mb-12'>
                        <h2 className='md:text-5xl text-[2.5rem] font-extrabold text-gray-900'>
                            <span> Our </span>
                            <span className='text-orange-600'>Values</span>
                        </h2>
                        <div className='w-32 h-1 bg-orange-400 md:mt-5 mt-3 mx-auto'></div>
                    </div>

                  
                    <div className='mb-16 rounded-xl overflow-hidden shadow-xl'>
                        <img 
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2800&auto=format&fit=crop" 
                            alt="A beautiful, organized grocery store aisle representing quality and fresh products"
                            className='w-full h-80 object-cover' 
                        />
                    </div>
                   
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {renderCARDS}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Values