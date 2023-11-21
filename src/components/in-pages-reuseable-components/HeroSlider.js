import React from "react";
import {Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css"
import '../../styles/index.css'
import {Navigation, Pagination} from "swiper/modules";
import useSmallScreen from "../../hooks/useSmallScreen";
const slides={
    slide1:'/images/home-page/room.jpg'
}
const SlideImage=({src})=> {
    const [isSmallScreen] =useSmallScreen()
    const largeScreenHeight='536px'
    const largeScreenWidth='1120px'
    const smallScreenWidth='100%'
    const smallScreenHeight= '304px'
    return <img src={src} height={isSmallScreen?smallScreenHeight:largeScreenHeight} width={isSmallScreen?smallScreenWidth:largeScreenWidth} alt={"slide"}/>}
const RightArrow=({id=''})=>{
    return(
            <svg className={'pointer-cursor d-none d-lg-block'} style={{color:'white',width:"52px",height:"52px"}} id={id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
    )
}
const LeftArrow=({id})=>{
    const style={color:'white',width:"52px",height:"52px"}
    return(<svg style={style} id={id} className={'pointer-cursor d-none d-lg-block'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
    )
}

const HeroSlider = () => {
    return (
            <Swiper loop spaceBetween={30} className={"w-100"}
                    modules={[Navigation,Pagination]} navigation={{
                        nextEl:'#right-arrow',
                        prevEl:'#left-arrow'}}
                    pagination={{
                        el:'#hero-pagination',
                        clickable:true,
                        bulletActiveClass:"hero-active-pagination-bullet",
                        bulletClass:"hero-pagination-bullet",
                        "renderBullet":function (index, className){
                            return `<div class="${className}"></div>`;
                        }
                    }}>

                <SwiperSlide><SlideImage src={slides.slide1}/></SwiperSlide>
                <SwiperSlide><SlideImage src={slides.slide1}/></SwiperSlide>
                <SwiperSlide><SlideImage src={slides.slide1}/></SwiperSlide>

                <LeftArrow id={"left-arrow"} />
                <RightArrow id={"right-arrow"}/>
                <div id={"hero-pagination"} className={"position-absolute d-flex justify-content-center gap-3"}/>
            </Swiper>
    )
};

export default HeroSlider