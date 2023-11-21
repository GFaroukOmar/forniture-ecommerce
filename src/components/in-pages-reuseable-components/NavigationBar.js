import React, {useContext, useState} from "react";
import {ColoredSpan, Link, Text} from "../in-components-reuseable-components/TypographyComponents";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/Typography.css'

import {
    BagIcon,
    CancelIcon,
    CircleNumber,
    FacebookIcon,
    InstagramIcon,
    NavigationMenuIcon,
    ProfileIcon,
    YoutubeIcon
} from "../in-components-reuseable-components/Icons";
import SearchBar from "./SearchBar";
import useSmallScreen from "../../hooks/useSmallScreen";
import CartProductsToggle from "../in-components-reuseable-components/CartProductsToggle";
import {Context} from "../../hooks/CartContext";
const SmallScreensMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const Overlay = () => {
        const overlayStyle={
            position: 'fixed',
            top: 0,
            zIndex:2,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.45)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return(
            <div style={overlayStyle} className={"d-flex flex-column align-items-start justify-content-start"}>
                <div className={"d-flex ms-3 mt-4 gap-3 flex-column align-items-start justify-content-start"}>
                    <Text size={24}>3elegant<ColoredSpan >.</ColoredSpan></Text>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/products"}>Products</Link>
                    <Link to={"/contact-us"}>Contact Us</Link>

                    <SearchBar/>
                    <div className={'pointer-cursor'} onClick={()=> {setShowMenu(false)}}>
                        <CancelIcon width={32} height={32}/>
                    </div>
                </div>
                <div className={"align-self-center mt-5 d-flex flex-column justify-content-center"}>
                    <Link className={'text-white'} color={'neural-01'}>Sign in</Link>
                    <div className={'d-flex gap-3 mt-2'}>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <YoutubeIcon/>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div className={'pointer-cursor'} onClick={()=>setShowMenu(true)}>
                <NavigationMenuIcon/>
            </div>
            {showMenu && <Overlay/>}
        </div>
    )
}
const NavigationLinks = ({activePage}) => {
    const [isSmallScreen]=useSmallScreen()
    return (<ul className={"d-flex  mb-0 list-unstyled gap-4"}>
        {isSmallScreen ? null
            : <>
                <li><Link to={"/"} color={activePage==="home"?"primary":"neutral-04"} >Home</Link></li>
                <li><Link to={"/shop"} color={activePage==="shop"?"primary":"neutral-04"}>Shop</Link></li>
                <li><Link to={"/blog"} color={activePage==="products"?"primary":"neutral-04"}>Blog</Link></li>
                <li><Link to={"/contact-us"} color={activePage==="contact-us"?"primary":"neutral-04"}>Contact Us</Link></li></>
        }
    </ul>)
}
const NavigationIcons = ({showCart}) => {
    const value=useContext(Context)
    const numberOfProductsInCart=value.products.length
    const [isSmallScreen]=useSmallScreen()
    return(<ul className={"d-flex mb-0 list-unstyled gap-2"}>
        {isSmallScreen ? null:
            <>
                <li><SearchBar/></li>
                <li className={"d-flex justify-content-center align-items-center"}><div className={"d-flex justify-content-center align-items-center pointer-cursor"}><Link to={"/profile"}><ProfileIcon/></Link></div></li>
            </>
        }

        <li className={"d-flex pointer-cursor align-items-center"}
            onClick={()=> {showCart()}}><div className={"d-flex"}><BagIcon/><CircleNumber number={numberOfProductsInCart}/></div>
        </li>

    </ul>)
}
const BrandName = () =>{
    const [isSmallScreen]=useSmallScreen()
    return (<div className={"d-flex gap-3 align-items-center"}>
        {isSmallScreen?<SmallScreensMenu/>:null}
        <Link to={"/"}><Text size={24}>3elegant<ColoredSpan >.</ColoredSpan></Text></Link>
    </div>)
}

const NavigationBar=({activePage="home"})=>{
    const [isCartShown, setIsCartShown] = useState()
    const showCart=()=>setIsCartShown(true)
    const hideCart=()=>setIsCartShown(false)

    return (
        <nav style={{height:'60px'}} className={"container-fluid sticky-top d-flex align-items-center justify-content-around "}>
            {isCartShown && <CartProductsToggle hideCart={hideCart}/>}
            <BrandName/>
            <NavigationLinks activePage={activePage}/>
            <NavigationIcons showCart={showCart}/>
        </nav>
    );
}

export default NavigationBar;