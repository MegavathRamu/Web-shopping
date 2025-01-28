import React ,{useState,useEffect} from 'react'
import './Offers.css'
import offers_image from '../Asserts/offers_image.webp'


const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1)); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className='ofers'>
        <div className="slider-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <img src={offers_image} alt="" />
        
        <img src={offers_image} alt="" />
        <img src={offers_image} alt="" />
        
        </div>

      
    </div>
  )
}

export default Offers
