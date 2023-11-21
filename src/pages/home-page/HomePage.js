import React from "react";
import NavigationBar from "../../components/in-pages-reuseable-components/NavigationBar";
import HeroSection from "./HeroSection";
import BannerGrid from "./BannerGrid";
import ProductCarousel from "./ProductCarousel";
import ValuesSection from "./ValuesSection";
import CoolBanner from "./CoolBanner";
import Articles from "./Articles";
import NewsLetter from "../../components/in-pages-reuseable-components/NewsLetter";
import Footer from "../../components/in-pages-reuseable-components/Footer";
const HomePage=()=>{
    return(
        <>
            <NavigationBar activePage={"home"}/>
            <HeroSection/>
            <BannerGrid/>
            <ProductCarousel/>
            <ValuesSection/>
            <CoolBanner/>
            <Articles/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default HomePage