import React from 'react';
import mypic2 from "../assets/kakakhail1.png";
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
      
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 md:justify-around items-center w-full ">
           <div className=" md:w-1/2 max-w-[500px] flex flex-col justify- items-center">
           <h3 className="text-left w-full pb-4 bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">HELLO!</h3>
           <h1 className="text-[35px] leading-[40px] text-center sm:w-full xs:border   sm:text-[40px] sm:leading-[50px]    md:text-[32px] md:leading-[40px] md:text-left lg:leading-[60px]  lg:text-[44px] tracking-wide">
             I'm Kamran Ali Expert <br /> 
             <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
               {" "}
               Front-End Web <br /> Developer
             </span>
           </h1>
           <p className="text-center text-gray-400 mt-5  md:text-left md:mt-4 md:text-sm    lg:mt-7 lg:text-base ">
             Empower your creativity and bring your VR app ideas to life with our
             intuitive development tools. Get started today and turn your imagination
             into immersive reality!
           </p>

           <div className="w-full flex justify-center mt-9  md:justify-start md:mt-10   lg:mt-14">
            <a
              href="https://github.com/kamran-ali555"
              className="py-3 px-4 mx-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#Contact"
              className="py-3 px-4 mx-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
            >
              Contact Me
            </a>
          </div>

           </div>

            {/* first div */}
           <div className="">
           <img 
              className=" md:w-[350px] lg:w-full rounded-lg mx-2"
              src={mypic2} 
            >
            </img>
           </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
      
    </section>
  );
}




{/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a
  href="https://github.com/kamran-ali555"
  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
>
  View Projects
  <ArrowRight className="w-4 h-4" />
</a>

<a
  href="#contact"
  className="px-8 py-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
>
  Contact Me
</a>
</div> */}



{/* <div className="w-full flex justify-center mt-9  md:justify-start md:mt-10   lg:mt-14">
<a
  href="https://github.com/kamran-ali555"
  className="py-3 px-4 mx-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
>
  View Projects
  <ArrowRight className="w-4 h-4" />
</a>

<a
  href="#contact"
  className="py-3 px-4 mx-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
>
  Contact Me
</a>
</div> */}