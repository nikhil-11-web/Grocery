import React from 'react';

const Discount = () => {


 const discountStickerUrl = "https://cdn.vectorstock.com/i/500p/56/26/discount-button-20-off-sale-vector-14075626.jpg";
 const backgroundTextureUrl = 'https://img.freepik.com/free-photo/vegetables-herbs-basket_23-2147694078.jpg?semt=ais_hybrid&w=740&q=80'; 

const productImageUrl = 'https://t4.ftcdn.net/jpg/06/51/99/35/360_F_651993589_CdLVLfRHWdr7aLUZyrIslm4IT6fs4G8w.jpg'; 

  return (
    <section className='bg-gray-900 overflow-hidden relative'>
      
      {/* Background Image/Pattern Placeholder */}
      <div 
        className='absolute inset-0 opacity-10 bg-cover bg-center' 
        style={{ backgroundImage: `url('${backgroundTextureUrl}')` }} 
      ></div>
      
   
      <div className='max-w-[1400px] mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10'>
        
        <div className='flex flex-col md:flex-row items-center justify-between'>
          
         
          <div className='text-white mb-8 md:mb-0 md:pr-10 flex flex-col items-center md:items-start'>
            
            
            <div className='w-40 h-40 md:w-56 md:h-56 relative -mt-8 -ml-8 md:-ml-12 lg:-mt-12 lg:-ml-16 z-30'> 
                <img 
                    src={discountStickerUrl} 
                    alt="20% Off Discount Sticker" 
                    className='w-full h-full object-contain drop-shadow-lg' // Added drop-shadow for visual depth
                />
            </div>
            
            <div className='mt-4 text-center md:text-left'>
              
              <h3 className='text-4xl md:text-5xl lg:text-7xl text-white font-black leading-tight'>
                **First Order Discount!** 🥳
              </h3>
              
              
              <p className='text-white my-6 max-w-xl text-lg'>
                Enjoy an exclusive 20% discount on your entire grocery order. Shop for fresh essentials and save big on your first purchase. **Fast delivery and quality guaranteed**.
              </p>
            </div>
          </div>

          
          {/* Right Side: Product Image and Button */}
          <div className='flex flex-col items-center md:items-end'>
            
            {/* Illustrative Image - Now included */}
            <div className='w-48 h-48 md:w-64 md:h-64 mb-6 relative  z-20'>
                <img 
                    src={productImageUrl} 
                    alt="Basket of fresh groceries" 
                    className='w-full h-full object-contain rounded-full'
                />
            </div>

            {/* Premium Button */}
            <button 
              className='bg-orange-500 text-white px-8 py-4 text-xl rounded-xl font-extrabold 
              hover:bg-orange-600 transition duration-300 shadow-2xl 
              shadow-orange-500/50 transform hover:scale-105 active:scale-95'
            >
              Unlock Your Savings
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Discount;