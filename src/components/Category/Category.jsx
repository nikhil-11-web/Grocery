import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORY_DATA = [
    {
        id: 1,
        title: "Fruits & Veggies",
        description: "Fresh, Organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        img: "https://i.pinimg.com/1200x/78/cd/c3/78cdc395b37c087de551bb7756489995.jpg",
        path: '/fruits'
    },
    {
        id: 2,
        title: "Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        img: "https://t4.ftcdn.net/jpg/00/78/39/25/360_F_78392550_0azqO8s1wBexN0q9dm1L3QbbAX6rQoPH.jpg",
        path: '/dairy' // Corrected the previous 'patg' typo and ensured consistency
    },
    {
        id: 3,
        title: "Meat & Seafood",
        description: "High Quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        img: "https://recipes.net/wp-content/uploads/2020/08/different-types-of-fish-and-meat-scaled.jpg",
        path: '/seafood'
    },
    {
        id: 4,
        title: "Bakery & Bread",
        description: "Artisan breads, pastries, and delicious baked goods made fresh every morning.",
        img: "https://www.mashed.com/img/gallery/7-best-and-6-worst-grocery-store-bakeries/l-intro-1685296085.jpg",
        path: '/bakery'
    },
];


const CategoryCard = ({ title, description, img, path }) => {
    return (
        <div className='bg-white shadow-xl hover:shadow-2xl shadow-blue-300 hover:bg-zinc-200 transition-all duration-300 rounded-lg p-6 flex flex-col items-center text-center border border-gray-400'>
            
            <div className='w-50 h-40 mb-4 overflow-hidden rounded-full border-4 border-orange-400'>
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    loading="lazy" 
                />
            </div>
            
            <h3 className='text-3xl font-semibold text-gray-800 mb-2'>{title}</h3>
            <p className='text-gray-500 text-sm h-12 overflow-hidden'>{description}</p>
            
            {/* The Link uses the 'path' prop correctly */}
            <Link
                to={path} 
                className='mt-6 px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-md'
            >
                See All →
            </Link>
        </div>
    )
}


const Category = () => {

    const renderCARDS = CATEGORY_DATA.map((category) => (
        <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            img={category.img}
            path={category.path} 
        />
    ))

    return (
        <section className='bg-gray-50'>
            <div className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                
                <div className='w-fit mx-auto text-center mb-16'>
                    <h2 className='md:text-5xl text-[2.5rem] font-extrabold text-gray-900'>
                        <span className='text-orange-600'>Shop </span>
                        by Category 🛒
                    </h2>
                    <div className='w-34 h-1 bg-orange-400 md:mt-5 mt-3 mx-auto'></div>
                </div>
                
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {renderCARDS}
                </div>

                
          

            </div>
        </section>
    )
}

export default Category