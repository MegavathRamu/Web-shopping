import React,{useState,useEffect} from 'react'
import Womenss from '../Asserts/Womenss';
import Womensproducts from '../Women/Womensproducts';
import banner_image40 from '../Asserts/banner_image40.png'

const Womens = () => {
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
        <img src={banner_image40} alt="Slide 1" className="slider-image" />
        <img src={banner_image40} alt="Slide 2" className="slider-image" />
        <img src={banner_image40} alt="Slide 3" className="slider-image" />
      </div>

    </div>
    <div className='collection'>
       <h1 className="mens-product">consoles in  zuio.oo</h1>
        <hr />
        <div className="colections_items">
            {Womenss.map((Womenss, i) => {
                return <Womensproducts key={i} id={Womenss.id} name={Womenss.name} image={Womenss.image} new_price={Womenss.new_price} old_prices={Womenss.old_prices} />
            })}
        </div>
    </div>
    </>
  )
}

export default Womens
