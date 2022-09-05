import React from 'react'
import Slider from "react-slick";
import { Typography } from '@mui/material';

const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    // cssEase: "linear",
    initialSlide: 0,
    className: "center sliderwrap",
    arrows: false,
    // swipeToSlide: true,
    // centerMode: true,
    // centerPadding: "60px",

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  const sliderData = [
    {
      title: 'Build Payment Ecosystem with KONA PLATE',
      desc: 'Instantly build your cards & payment platform you need with KONA open API platform'
    },
    {
      title: 'Build Payment Ecosystem with KONA PLATE',
      desc: 'Instantly build your cards & payment platform you need with KONA open API platform'
    },
    {
      title: 'Build Payment Ecosystem with KONA PLATE',
      desc: 'Instantly build your cards & payment platform you need with KONA open API platform'
    }
  ]
  return (
      <div className='mainslider'>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          {sliderData?.map((item, index) => (
            <div className='sliderwrap__listitem'>
              <Typography 
                component='h1' 
                className='sliderwrap__title'
                sx={{
                  fontSize: '36px',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}
                color='#fff'
                >
                {item.title}
              </Typography>
              <Typography 
                component='p' 
                className='sliderwrap__desc'
                sx={{
                  fontSize: '18px',
                  lineHeight: '1.6'
                }}
                color='#fff'  
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
  )
}

export default HomeSlider