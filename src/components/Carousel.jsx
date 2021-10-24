import React,{useState} from 'react'
import Slider from "react-slick"
import myImg from "../assets/hero-img.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const carouselStyle = {
    width:'50%',
    margin:"4rem auto "
}

const images = [myImg,myImg,myImg,myImg,myImg]

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
         <img  alt="arrow-right" src="https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-right.png"/> 
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
         <img alt="arrow-left" src="https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-left.png"/> 
      </div>
    );
  };

const Carousel = () => {
    const settings =  {
        infinite: true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (curr,next) => setActiveImgIdx(next)
    }
    const [activeImgIdx, setActiveImgIdx] = useState(0)
    return (<div style={carouselStyle}>
                <Slider {...settings}>
                    {images.map((img,idx) => (
                        <div className={idx === activeImgIdx ? "slide activeSlide" : "slide"}>
<<<<<<< HEAD
                            <img  src= {img} alt="doctor" />
=======
                            <img alt="doctor-logo" src= {img} alt="doctor" />
>>>>>>> d5c9ebbb2e4a5fe02e70f890191b18b806715a3a
                        </div>
                    ))}
                </Slider>
            </div>)
}

export default Carousel
