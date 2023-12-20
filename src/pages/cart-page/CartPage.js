import NavigationBar from "../../components/in-pages-reuseable-components/NavigationBar";

import CheckOutProcess from "./CheckOutProcess";
import {useEffect, useState} from "react";
import CheckOutContent from "./CheckOutContent";
import Footer from "../../components/in-pages-reuseable-components/Footer";
const CartPage = () => {
    const [step, setStep] = useState(1)
    useEffect(() => {
        document.title='cart'
    }, []);
    return(
        <>
            <NavigationBar/>
            <CheckOutProcess step={step}/>
            <CheckOutContent step={step} setStep={setStep}/>
            <Footer/>
        </>
    )
}
export default CartPage