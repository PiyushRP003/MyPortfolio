import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2
    });
  });
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="../../public/images/bg.png" alt="" />
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {
                                        words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" src={word.imgPath} alt={word.text} />
                                                <span className="text">{word.text}</span>
                                            </span>    
                                        ))
                                    }
                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Project</h1>
                        <h1>That Drive Performance and Impact</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I am Piyush Ranjan Pandey, 🚀 I'm a Software Engineer with 3+ years of experience building high-performance full-stack applications using React, Node.js,Express.js and MongoDB. I specialize in creating scalable UIs, optimizing backend systems, and delivering real-time data-driven dashboards. Passionate about clean code, performance, and continuous learning.
                    </p>
                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my work"></Button>
                </div>
            </header>

            {/* RIGHT PART - #D MODEL */}
            {/* <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure> */}
        </div>
        <AnimatedCounter />      
    </section>
  )
}

export default Hero
