import React,{useState} from 'react'
import {BsArrowLeftCircle,BsArrowLeftCircleFill,BsArrowRightCircle,BsArrowRightCircleFill  } from "react-icons/bs"
import Slider from "react-slick"
import "./style.css"
import myImg from "../../assets/hero-img.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const carouselStyle = {
    width:'50%',
    margin:"4rem auto "
}

const images = [myImg,myImg,myImg,myImg,myImg]

  const NextArrow = ({ onClick }) => {
    const [hovered,setHovered] = useState(false) 
    return ( <div 
                  onMouseEnter={() =>setHovered(true)} 
                  onMouseLeave={() => setHovered(false)}>
                    {hovered ? 
                    (<BsArrowRightCircleFill className="arrow next text-3xl" onClick={onClick}/>)
                      : <BsArrowRightCircle className="arrow next text-3xl " onClick={onClick}/>
                    }
              </div>);
  };

  const PrevArrow = ({ onClick }) => {
    const [hovered,setHovered] = useState(false) 
    return ( <div 
                  onMouseEnter={() =>setHovered(true)} 
                  onMouseLeave={() => setHovered(false)}>
                    {hovered ? 
                    (<BsArrowLeftCircleFill className="arrow prev text-3xl" onClick={onClick}/>)
                      : <BsArrowLeftCircle className="arrow prev text-3xl " onClick={onClick}/>
                    }
              </div>);
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
                            <img  alt="doctor" src= {img}  />
                        </div>
                    ))}
                </Slider>
            </div>)
}

export default Carousel
