import React, { useState } from 'react';


const Category = ({ name, isActive, onClick }) => {
const baseClasses = 'px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ease-in-out cursor-pointer shadow-md';
const activeClasses = 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/50';
 const inactiveClasses = 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200';

 return (
<button
 className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
 onClick={onClick}
 >
 {name} </button>
 );
};
// -----------------------------------------------------------------------------------


const dummyProducts = [
 { id: 1, name: 'Organic Red Apples', category: 'Fruits', price: 4.99, image: 'https://tiimg.tistatic.com/fp/1/007/629/red-a-grade-100-pure-organic-fresh-natural-apple-with-sweet-taste--172.jpg' },
{ id: 2, name: 'Fresh Asparagus', category: 'Vegetable', price: 3.50, image: 'https://freshindiaorganics.com/cdn/shop/products/image.jpg?v=1689062833' },
 { id: 3, name: 'Greek Yogurt (Plain)', category: 'Dairy', price: 2.75, image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/curd-yogurt/y/7/f/-original-imahfzh8acfzzyt5.jpeg?q=90' },
 { id: 4, name: 'Wild-Caught Salmon', category: 'SeaFood', price: 18.00, image: 'https://wildalaskasalmonandseafood.com/wp-content/wass-img/seafood/banner.jpg' },
 { id: 5, name: 'Bananas (Bunch)', category: 'Fruits', price: 1.29, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMOtPEHhkindeBx3IcRA7lqRhWBduSQRL6c5AgXpUq4bc_SMJIF6HOO1GBH_6UY5Xaos&usqp=CAU' },
{ id: 6, name: 'Baby Spinach', category: 'Vegetable', price: 2.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerb5Ff7heeOZQJFfL-tKxr-Gdfztki-oZ7A&s' },
 { id: 7, name: 'Cheddar Cheese Block', category: 'Dairy', price: 6.50, image: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467053586/XX/TW/KQ/8960632/cheddar-block-yellow-white-local.png' },
 { id: 8, name: 'Shrimp (Jumbo)', category: 'SeaFood', price: 24.99, image: 'https://groffer.in/wp-content/uploads/2025/03/tigerprawnsproduct.webp' },
];


const ProductCard = ({ product }) => (
 <div className='bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden 
 transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl 
group'>
 
 <div className='aspect-square bg-gray-100 overflow-hidden'>
 

 <img 
src={product.image} 
 alt={product.name} 
 className='w-full h-80 object-cover transition duration-300 group-hover:opacity-90'
 />
</div> 
 
 <div className='p-6'>
<h3 className='text-xl font-bold text-gray-900 truncate'>{product.name}</h3>
 <p className='text-sm text-orange-600 font-semibold mt-1'>{product.category}</p>
 
<div className='flex justify-between items-center mt-4'>
<span className='text-3xl font-extrabold text-gray-900'>
 ${product.price.toFixed(2)}
 </span>
 <button className='bg-orange-500 text-white px-5 py-2 rounded-lg font-bold 
  hover:bg-orange-600 transition duration-300 shadow-lg 
                           shadow-orange-500/30'>
          Buy Now
        </button>
      </div>
    </div>
  </div>
);


const Product = () => {

  const ProductData = ['All', 'Fruits', 'Vegetable', 'Dairy', 'SeaFood'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Logic to filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? dummyProducts
    : dummyProducts.filter(product => product.category === selectedCategory);

  return (
    
     <section>
      <div className='bg-gray-100'>
          <div className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Title Section */}
            <div className='w-fit  mx-auto text-center mb-16'>
                <h2 className='md:text-5xl text-[2.5rem] font-extrabold text-gray-900'>
                   <span>Our </span>
                   <span className='text-orange-500'>Products</span>
                </h2>
                <div className='w-32 h-1 bg-orange-400 md:mt-5 mt-3 mx-auto'></div>
            </div>
            
            {/* Category Filter Buttons (using ProductData.map) */}
            <div className='flex bg-amber-200 rounded-full flex-wrap justify-center gap-4 mb-20'>
              {ProductData.map((categoryName) => (
                <Category 
                     key={categoryName} 
                     name={categoryName}
                     isActive={selectedCategory === categoryName}
                       onClick={() => setSelectedCategory(categoryName)}
                    />
                  ))}
             </div>
                   </div>
          <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
           <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10'>
          {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
 ))
) : (
 <p className='col-span-full text-center text-2xl text-gray-500 p-10 bg-white rounded-xl shadow-inner'>
Sorry, no products found in the **{selectedCategory}** category yet! 🥕
</p>
)}
 </div>
 </div>

</div>
</section>
 )
}

export default Product;