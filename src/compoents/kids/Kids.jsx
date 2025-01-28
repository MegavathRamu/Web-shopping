import React,{useState,useEffect} from 'react'
import smallkids from '../Asserts/smallkids'; 
import Babykids from '../smallbaby/Babykids';
import banne_image39 from '../Asserts/banne_image39.jpg';

const Kids = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1)); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <>
    <div className="banner">
    <div className="slider-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <img src={banne_image39} alt="Slide 1" className="slider-image" />
        <img src={banne_image39} alt="Slide 2" className="slider-image" />
        <img src={banne_image39} alt="Slide 3" className="slider-image" />
      </div>

    </div>
    <div className='collection'>
       <h1>services in GAMING_ZUO</h1>
        <hr />
        <div className="colections_items">
            {smallkids.map((smallkids, i) => {
                return <Babykids key={i} id={smallkids.id} name={smallkids.name} image={smallkids.image} new_price={smallkids.new_price} old_prices={smallkids.old_prices} />
            })}
        </div>
    </div>
    </>
  )
}

export default Kids
