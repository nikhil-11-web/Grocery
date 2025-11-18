import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

// Static testimonial data array
const testimonialsData = [
    {
        name: "Jessica Miller",
        title: "Regular Customer",
        rating: 5,
        quote: "GrOcify has completely changed the way I shop for groceries. The produce is unbelievably fresh, delivery is fast, and the customer support is top-notch. Highly recommend their organic selection!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38D-hj1BfEJkv7msCEJGYi8KZiSKSSQajSsmvkiO2uatjTBhgqvXRR5cXpfqmQSGzP44&usqp=CAU"
    },
    {
        name: "David Chen",
        title: "Small Business Owner",
        rating: 5,
        quote: "We rely on GrOcify for all our fresh produce needs. Their bulk ordering is seamless, and the quality is consistently superior to any other supplier we've used.",
        img: "https://media.istockphoto.com/id/1483109187/photo/man-outdoor-senior-happy-retirement-elderly-portrait-male-active-park-smiling-old-fun-nature.jpg?s=612x612&w=0&k=20&c=o95IrJ5YbN80cLO8qrdcU-_h5dbCSvliCb1olFp4ix0="
    },
    {
        name: "Sarah Kim",
        title: "First-Time Buyer",
        rating: 4,
        quote: "The delivery was quick, and everything was packed perfectly. I wish there were more international options, but the local produce is fantastic. Will definitely order again!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4g_gODjnPpsxLhBOy97gswVqX6u5SbNgJw&s"
    },
];

const renderRatingStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
        <span key={index} className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}>&#9733;</span>
    ));
};


const Testimonials = () => {
    return (
        <section className='py-20'>
            <div className='max-w-7xl mx-auto px-6 md:px-10'>

                {/* --- Section Title --- */}
                <div className='w-fit mx-auto text-center mb-12'>
                    <h2 className='md:text-5xl text-[2.5rem] font-extrabold text-gray-900'>
                        <span className='text-orange-600'>Customer </span>
                        <span>Testimonials</span>
                    </h2>
                    <div className='w-32 h-1 bg-orange-400 md:mt-5 mt-3 mx-auto'></div>
                </div>

                {/* --- Navigation Buttons (Kept for visual layout/future slider) --- */}
                <div className=' flex justify-end gap-3 py-5'>
                    <button className='flex items-center justify-center text-2xl text-gray-700 rounded-full w-12 h-12 bg-white border border-gray-300 shadow-md hover:bg-orange-500 hover:text-white transition duration-300'>
                        <GoChevronLeft />
                    </button>
                    <button className='flex items-center justify-center text-2xl text-gray-700 rounded-full w-12 h-12 bg-white border border-gray-300 shadow-md hover:bg-orange-500 hover:text-white transition duration-300'>
                        <GoChevronRight />
                    </button>
                </div>

                {/* --- Testimonial Cards Container --- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {testimonialsData.map((data, index) => (
                        
                        // --- Individual Testimonial Card ---
                        <div 
                            key={index} 
                            className='bg-white shadow-xl border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full hover:shadow-2xl transition duration-300'
                        >

                            {/* Quote Icon Background */}
                            <div className='absolute top-2 right-4 opacity-5 text-8xl text-orange-400 font-serif'>
                                &ldquo;
                            </div>
                            
                            {/* Testimonial Content */}
                            <p className='text-gray-700 text-base italic leading-relaxed mb-8 relative z-10'>
                                "{data.quote}"
                            </p>

                            {/* Customer Profile */}
                            <div className='mt-auto pt-4 border-t border-gray-100'>
                                <div className='flex gap-4 items-center'>
                                    
                                    {/* Avatar - NOW USING THE 'img' PROP */}
                                    <div className='w-14 h-14 rounded-full border-2 border-orange-600 flex-shrink-0 overflow-hidden'>
                                        <img 
                                            src={data.img} 
                                            alt={`Avatar of ${data.name}`} 
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    {/* Name and Title */}
                                    <div>
                                        <h5 className='text-lg font-bold text-gray-900'>{data.name}</h5>
                                        <p className='text-sm text-gray-500'>{data.title}</p>
                                    </div>
                                </div>
                                {/* Rating Stars */}
                                <div className='flex mt-3'>
                                    {renderRatingStars(data.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials