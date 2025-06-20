"use client";
import Head from "next/head";
import Footer from "./components/Footer";
import { useState, useRef, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovering(true));
      heroElement.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  // Calculate image position based on mouse position
  const imageStyle = {
    transform: `translate(
      ${(mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) * 0.05}px,
      ${(mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) * 0.05}px
    )`,
    transition: 'transform 0.5s ease-out'
  };

  return (
    <>
      <Head>
        <title>SmaTech - Innovative Tech Solutions</title>
        <meta
          name="description"
          content="SmaTech provides cutting-edge technology solutions to grow your business."
        />
        <meta name="keywords" content="technology, IT solutions, software, innovation" />
        <meta name="author" content="SmaTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white"
      
      >
        <div   ref={heroRef}
        className="relative flex items-center justify-center min-h-screen px-6 py-12 overflow-hidden bg-white md:min-h-full lg:min-h-screen">
          
       
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-50"
          style={{ backgroundImage: "url('/bg1.png')" }}
        />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl px-6 mx-auto">
          {/* Main content row */}
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            {/* Text content */}
            <div className="mb-10 text-center md:w-1/2 md:mb-0 md:text-left">
              <h1 
                className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-in-out text-black ${isHovering ? 'transform rotate-1 scale-105' : ''}`}
              >
                Most Trusted Technology Service
              </h1>
              <p 
                className={`text-xl md:text-2xl mb-8 transition-all duration-1000 ease-in-out text-[black] ${isHovering ? 'transform -rotate-1 scale-105' : ''}`}
              >
                Enabling Tomorrow&apos;s Enterprise Today
              </p>
              <button className="px-8 py-3 font-bold text-white transition-colors duration-300 bg-[#8DC440] rounded-full hover:bg-[#03577A] cursor-pointer">
                Get Started
              </button>
            </div>
            
            {/* Floating image */}
            <div 
              className="relative md:w-1/2"
              style={imageStyle}
            >
              <img 
                src="/hero.jpg"
                alt="SmaTech Group"
                className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>   
 </div>
 
<div className="flex flex-col items-center justify-between gap-2 px-5 py-10 text-sm bg-white md:pb-5 md:flex-row md:px-64 md:pt-2 lg:text-sm">
  {/* Column 1 - Image */}
  <div className="flex justify-center md:w-1/3">
    <img 
      src="/faces_get_in_touch.svg"
      alt="faces"
      className="w-40 h-auto"
    />
  </div>
  
  {/* Column 2 - Heading + Paragraph */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/3">
    <h2 className="mb-2 text-xl font-semibold text-black">Welcome back!</h2>
    <p className="text-gray-700">Tell us what else you're interested in</p>
  </div>
  
  {/* Column 3 - Button */}
  <div className="flex justify-center md:justify-end md:w-1/3">
    <button className="px-6 py-3 text-sm text-black bg-gray-300 cursor-pointer rounded-3xl hover:bg-gray-400 lg:text-sm">
      Get in touch
    </button>
  </div>
</div>

{/* End of hero section div */}


{/* Industries Section */}

<section className="bg-[#03577A] text-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 ">
  {/* Left column */}
  <div className="md:w-1/2">
    <h4 className="text-sm font-semibold text-[#8DC440] uppercase tracking-wide mb-4">
      Industries
    </h4>
    <h2 className="mb-4 text-3xl font-extrabold leading-snug md:text-4xl lg:text-xl">
      We've helped companies, building strong relationships with top–notch assistance.
    </h2>
  </div>

  {/* Right column */}
  <div className="flex flex-col gap-6 md:w-1/2">
    {/* Green line */}
    <div className="h-2 w-full bg-[#8DC440]" />

    {/* Description and arrow */}
    <div className="flex items-center justify-between gap-4">
      <p className="max-w-md text-gray-100 lg:text-sm">
        We help lots of small, medium and enterprise businesses in many different areas with their IT needs.
      </p>
      <div className="w-14 h-14 rounded-full bg-[#4A90A4] flex items-center justify-center hover:bg-[#387a8d] transition xl:w-14 xl:h-14 lg:w-14 lg:h-7">
        <span className="text-2xl text-white cursor-pointer lg:text-sm">→</span>
      </div>
    </div>
  </div>
  
</section>

{/* End of Industries Section */}

{/* consultancy section */}

<section className="flex flex-col px-5 pt-16 bg-green-50 md:px-24 lg:px-24 md:flex-row ">
  
  <div className="w-full md:w-1/2">
    <img 
      src="/consulting_lady.png"
      alt="consulting lady"
      className="w-full h-auto"
    />
  </div>
  <div className="flex flex-col justify-center w-full space-y-5 text-black lg:space-y-4 xl:space-y-10 md:w-1/2">
    <h2 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-4xl">Arrange a</h2>
    <h1 className="text-[#4A90A4] text-3xl xl:text-[57px] font-bold lg:text-4xl">
      Free IT Consultancy.
    </h1>
    <p className="text-sm lg:text-xs xl:text-sm">
      At Smatech Group, we don&apos;t just provide products; we offer solutions that transform the way you do business.
    </p>
    <button className="bg-[#4A90A4] p-5 text-white text-sm lg:text-sm lg:px-14 xl:px-5 xl:py-6 w-full xl:w-[335px] hover:bg-[#8DC440] hover:text-black cursor-pointer font-bold">Tell us how we can help</button>
    <div className="flex pb-5 space-x-6 md:pb-0">
      <div className="flex items-center space-x-2">
        <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
        <span className="text-sm lg:text-sm xl:text-sm">Quick response</span>
      </div>
      <div className="flex items-center space-x-2">
        <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
        <span className="text-sm lg:text-sm xl:text-sm">Save time & money</span>
      </div>
    </div>
  </div>
  
</section>

{/* end of consultancy section */}

{/* Why work with us */}

<section className="flex items-center justify-center text-center !px-6 !py-20 !bg-white">
  
  <div className="flex flex-col items-center max-w-4xl space-y-6">
    <p className="!text-sm !font-bold !text-[#8DC440]">WHY WORK WITH US</p>
    <h1 className="!text-[#4A90A4] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
      6 reasons why you should partner with Smatech
    </h1>
  </div>
  
</section>

{/* End of Why work with us */}


{/* Our Customers */}

<section>
  
<div className="flex flex-col items-center justify-center px-6 py-16 text-black align-middle md:px-24">
  <div>
  <p className="text-base text-center">Our customers are our number one priority and we strive to deliver <br />
them a service experience that's second to none.</p>
 </div>
<div className="flex flex-col space-x-0 text-sm md:space-x-20 pt-14 space-y-14 md:flex-row lg:text-xs lg:space-x-2">
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">Quick response</h1>
        <p>We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location.</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">Experienced</h1>
        <p>In more than 15 years of IT outsourcing, we have gained experience in a wide spectrum of technologies, industries</p>
      </div>
    </div>
  </div>
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">No geek speak</h1>
        <p>You deserve to have your questions answered in plain English. Our technicians will clearly explain what is brhappening so you understand..</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">Business savvy</h1>
        <p>We create valuable, customized solutions that enhance operations, utilizing our expertise to meet your business needs. Our technological solutions will help your business thrive.</p>
      </div>
    </div>
  </div>
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">One Stop Shop</h1>
        <p>We handle all aspects of your IT infrastructure including hardware, software management and any other related technology needs.</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
        <MessageCircleMore className="w-6 h-6 text-gray-500 fill-gray-300" />
      </div>
      <div>
        <h1 className="text-base font-bold">100% Satisfaction Guarantee</h1>
        <p>We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.</p>
      </div>
    </div>
  </div>
</div>
</div>

</section>

{/* End Our Customers */}

{/* start of mission */}

<section>
  
  <div className="px-5 md:px-24 bg-[#010626] md:min-h-full lg:min-h-screen text-center !py-20 space-y-6 md:space-y-20" style={{ backgroundImage: "url('/world_bg.svg')" }}>
  <p className="!text-sm !font-bold !text-[#8DC440]">OUR MISSION</p>
  <h1 className="!text-[#4A90A4] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">Join us in embracing
technology's possibilities.</h1>
  <p className="text-gray-400">At Smatech, we envision a future where seamless connectivity and
<br />innovative technology empower businesses to transcend boundaries and
<br />achieve their full potential.</p>
<div className="flex flex-col items-center !justify-between space-x-0 text-center space-y-14 md:flex-row md:space-y-0 pt-6 md:pt-0">
  <div className="flex flex-col items-center justify-center gap-5 space-x-0 text-center md:gap-0 md:flex-row md:space-x-5">
    <h1 className="text-6xl font-bold text-[#8DC440] lg:text-4xl xl:text-6xl">3hrs</h1>
    <p className="flex items-end text-sm lg:text-xs xl:text-sm md:text-start">Average time to resolve a technical bug.</p>
  </div>
  <div className="flex flex-col items-center justify-center gap-5 space-x-0 text-center md:gap-0 md:flex-row md:space-x-5">
    <h1 className="text-6xl font-bold text-[#8DC440] lg:text-4xl xl:text-6xl">10min</h1>
    <p className="flex items-end text-sm lg:text-xs xl:text-sm md:text-start">Average time to read and respond to an email</p>
  </div>
  <div className="flex flex-col items-center justify-center gap-5 space-x-0 text-center md:gap-0 md:flex-row md:space-x-5">
    <h1 className="text-6xl font-bold text-[#8DC440] lg:text-4xl xl:text-6xl">80%</h1>
    <p className="flex items-end text-sm lg:text-xs xl:text-sm md:text-start">Calls answered within 15 seconds of calling</p>
  </div>
</div>
  </div>
  
</section>

{/* end of mission */}

{/* start of lets get started */}

<section>
  
  <div className="px-5 md:px-24 !py-20 space-y-6 md:space-y-14 md:min-h-full lg:min-h-screen text-gray-400 flex items-center justify-center text-center flex-col">
    <h2 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-4xl">Let&apos;s get started</h2>
    <h1 className="text-[#4A90A4] text-3xl xl:text-[57px] font-bold lg:text-4xl">Still have questions?</h1>
    <p>Don&apos;t stress over technical issues, concentrate on your business. We&apos;ll give you the help you need.</p>
    <div>
      <button className="bg-[#4A90A4] text-white p-5 cursor-pointer md:px-20 px-5">Speak to an Expert</button>
      <button className="p-5 px-10 underline cursor-pointer underlin hover:">Learn more about services</button>
      <div className="w-full h-2 mt-10 bg-black md:mt-20"/>
    </div>
  </div>
  
</section>

{/* end of lets get started */}

      </main>

      

      <Footer />
    </>
  );
}