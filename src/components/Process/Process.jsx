import React from 'react';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { GiPlantWatering } from "react-icons/gi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { FaMedal } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const COLORS = {
    NAVY: 'bg-slate-900', 
    NAVY_TEXT: 'text-slate-900',
    GOLD_ACCENT: 'text-amber-400', 
    GOLD_BG: 'bg-amber-500',
    SLATE_LIGHT: 'bg-white', 
    CONNECTOR: 'border-slate-600',
};


const ProcessSteps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled className={`${COLORS.GOLD_ACCENT} text-4xl`} />,
        title: "Sustainable Sourcing",
        para: 'We partner with local, organic farms to ensure all ingredients are fresh, ethically grown, and meet our stringent quality standards.',
        icon: <GiPlantWatering className={`${COLORS.GOLD_ACCENT} text-5xl`} />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled className={`${COLORS.GOLD_ACCENT} text-4xl`} />,
        title: "Careful Handling & Prep",
        para: 'Produce is quickly sorted, cleaned, and packaged using biodegradable materials to lock in essential nutrients and freshness.',
        icon: <TbBuildingFactory2 className={`${COLORS.GOLD_ACCENT} text-5xl`} />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled className={`${COLORS.GOLD_ACCENT} text-4xl`} />,
        title: "Rigorous Quality Check",
        para: 'Each batch undergoes multi-point inspection by food safety experts, guaranteeing every item is perfectly ripe and flawless.',
        icon: <FaMedal className={`${COLORS.GOLD_ACCENT} text-5xl`} />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled className={`${COLORS.GOLD_ACCENT} text-4xl`} />,
        title: "Fresh & Fast Logistics",
        para: 'Our modern, temperature-controlled fleet ensures swift, reliable delivery straight to your door, preserving product integrity.',
        icon: <FaCarSide className={`${COLORS.GOLD_ACCENT} text-5xl`} />
    }
];

// Individual Step Component (Modified for Vertical Two-Part Arrangement)
const ProcessStepCard = ({ step, isLast }) => (
    <div className='relative flex flex-col items-start'>
        
        {/* Step Content Card */}
        <div className={`w-full p-8 ${COLORS.SLATE_LIGHT} rounded-xl shadow-2xl transition duration-500 hover:shadow-slate-700/50 hover:scale-[1.01] border-t-8 border-r-2 ${COLORS.GOLD_BG} border-slate-200 relative`}>
            
            {/* 🌟 PART 1 (Top Vertical Position): Icon and Number Block */}
            <div className='flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200'>
                {/* Icon (Now inline with the number) */}
                <div className={`p-2 rounded-full ${COLORS.GOLD_BG} shadow-md`}>
                    {step.icon}
                </div>
                {/* Step Number */}
                <span className='text-xl font-extrabold text-slate-700'>STEP {step.id}</span>
            </div>

            {/* 🌟 PART 2 (Bottom Vertical Position): Title and Description */}
            <div className='mt-4'>
                <h3 className={`text-3xl font-extrabold ${COLORS.NAVY_TEXT} mb-3`}>{step.title}</h3>
                <p className='text-slate-600 text-lg'>{step.para}</p>
            </div>
            
        </div>

        {/* Vertical Line Connector (Remains the same) */}
        {!isLast && (
            <div className={`w-0.5 h-12 md:h-20 ml-5 ${COLORS.CONNECTOR}  absolute bottom-[-3rem] md:bottom-[-5rem] left-0`}></div>
        )}
    </div>
);


const Process = () => {
    return (
        <section className={`${COLORS.NAVY} py-20`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                
                <div className='w-fit mx-auto text-center mb-16'>
                    <h2 className='md:text-5xl text-[2.5rem] font-extrabold text-white'>
                        <span> Our </span>
                        <span className={`${COLORS.GOLD_ACCENT}`}>Signature Process</span> 
                    </h2>
                    <div className='w-32 h-1 bg-amber-400 md:mt-5 mt-3 mx-auto'></div>
                </div>
                
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {ProcessSteps.map((step, index) => (
                        <div 
                            key={step.id} 
                            
                            className={`flex flex-col items-start lg:col-auto`}
                        >
                            <ProcessStepCard step={step} isLast={index === ProcessSteps.length - 1} />
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Process;