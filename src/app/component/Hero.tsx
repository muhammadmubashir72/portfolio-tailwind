

import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';


import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="animate-slide-left">
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-red-800 overflow-hidden">
     
      <Image
        src="/11648085085_f7c8fd2cc5.jpg" 
        alt="Background"
        layout="fill"
        objectFit="cover"                
        className="opacity-30"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-72 h-72 bg-gradient-to-r from-red-900 to-pink-700 rounded-full animate-pulse opacity-50 blur-2xl"></div>
        <div className="w-96 h-96 bg-gradient-to-r from-red-900 to-yellow-500 rounded-full animate-ping opacity-30 blur-3xl ml-20"></div>
      </div>
      
    
      <div className="z-10  text-center px-4 mb-12 md:px-8 lg:px-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 mt-10 animate-fade-in">
        <br />  HI! <br /> I <span className='text-blue-00'>AM MUHAAMAD MUBASHIR  </span> 
        </h1> 
9
        <div className="flex justify-center mt-6 mb-8">
          <Image
            src="/profile.jpg"
            alt="/profile.jpg"
            width={250}
            height={250}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
       
       

      <p className="text-lg md:text-xl lg:text-2xl text-red-900 mb-8 max-w-1xl animate-fade-in font-poppins font-semibold tracking-wide leading-relaxed">
       <p>I AM WEB & app DEVELOPER </p><span className='text-red-900'>WELCOME TO MY PORTFOLIO  I specialize in creating dynamic, responsive websites that enhance user experience and drive business growth.

</span> <br />
     
     </p>


<div className="flex justify-center mb-16">
      <Link href="#explore-section"
        
          className="flex items-center text-white border-2 border-red-900 px-6 py-3 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-900  shadow-lg"
          style={{ animation: "pulse 2s infinite" }}
        >
          <span className="mr-2">CLICK HERE AND SEE MY PORTFOLIO</span>
          <FaArrowDown size={24} />
       
      </Link>
    </div>
      </div>
    </div>
</div>


  );

};

export default Hero;



