import React,{useState,useEffect} from 'react'
import './Hero.css';
import slidernew from '../Asserts/slidernew.webp';
import back from '../Asserts/back.webp'





const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1)); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1));
  };
  return (
    <div className='hero'>
        <div className="slider-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <img src={slidernew} alt="" />
       
       
       


        
        <img src={back} alt="" />
        
        </div>
        <button className="<" onClick={prevSlide}>Prev</button>
        <button className=">" onClick={nextSlide}>Next</button>
      
    </div>
   
  )
}

export default Hero
