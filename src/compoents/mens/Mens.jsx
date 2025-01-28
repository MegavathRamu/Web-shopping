// Mens.jsx
import React ,{useState,useEffect}from 'react'
import Mens_product from '../Asserts/Mens_product'; 
import MenCollcetion from '../menscollection/MenCollcetion';
import banner_image1 from '../Asserts/banner_image1.jpg';
import What from '../Asserts/What.jpg';
import haa from '../Asserts/haa.jpg'
import WhatsApp from '../Asserts/WhatsApp.jpg'

import '../mens/Mens.css';



const Mens = () => {
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
        <img src={banner_image1} alt="Slide 1" className="slider-image" />
        { <img src={banner_image1} alt="Slide 2" className="slider-image" /> }
        {/* { <img src={haa} alt="Slide 3" className="slider-image" /> } */}
        { <img src={banner_image1} alt="Slide 2" className="slider-image" /> }
      </div>

    </div>
    
    <div className='collection'>
       <h1 className="mens-product">New_model laptop && electronices </h1>
        <hr />
        <div className="colections_items">
            {Mens_product.map((Mens_product, i) => {
                return <MenCollcetion key={i} id={Mens_product.id} name={Mens_product.name} image={Mens_product.image} new_price={Mens_product.new_price} old_prices={Mens_product.old_prices} Descriptions={Mens_product.Descriptions} />
            })}
        </div>
    </div>
    </>
  )
}

export default Mens;
