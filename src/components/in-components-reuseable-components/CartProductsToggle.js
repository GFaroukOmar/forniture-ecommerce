import {useContext} from "react";
import {Context as CartContext} from "../../hooks/CartContext";
import useSmallScreen from "../../hooks/useSmallScreen";
import {Heading, Text} from "./TypographyComponents";
import {CancelIcon, MinusIcon, PlusIcon} from "./Icons";
const ProductCell = ({product}) => {
    const value=useContext(CartContext)
    const productCellContainerStyle={
        padding:'24px 0 24px 0',
        borderBottom:'solid var(--neutral-04)',
        borderBottomWidth:'2px',
        height:'100px',
        background:'white',
        width:'100%',
        display:'flex',
        alignItems:'center',
        gap:'16px'
    }
    return(
        <div style={productCellContainerStyle}>
            <img src={product.mainImage} height={'96px'} width={'80px'}  alt={"product"}/>
            <div className={'d-flex w-100 justify-content-between'}>
                <div className={'d-flex flex-column'} style={{gap:'8px'}}>
                    <Text size={14} weight={'SemiBald'}>{product.name}</Text>
                    <Text size={12} weight={'AverageBald'} color={'neutral-04'}>Color: {product.color}</Text>
                    <div className={'d-inline-flex   align-items-center'} style={{gap:'12px',padding:'0 8px 0 8px',border:'solid var(--neutral-04) 1px',borderRadius:'4px'}}>
                        <div className={'pointer-cursor'} onClick={()=>value.decreaseQuantity(product)}><MinusIcon/></div>
                        <div>{value.products.find(p=>p===product).quantity}</div>
                        <div className={'pointer-cursor'} onClick={()=>value.increaseQuantity(product)}><PlusIcon/></div>
                    </div>
                </div>
                <div className={'d-flex flex-column'} style={{gap:'8px'}}>
                    <Text size={14} weight={'SemiBald'}>${product.originalPrice}</Text>
                    <div className={'pointer-cursor'} onClick={()=>value.removeFromCart(product)}><CancelIcon/></div>
                </div>
            </div>
        </div>
    )

}
const CartProductsToggle = ({hideCart}) => {
    const [isSmallScreen]=useSmallScreen()
    const value=useContext(CartContext)
    const overlayStyle={
        position: 'fixed',
        top: 0,
        zIndex:2,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'start',
        overflow:'auto'
    }
    const container={
        width:isSmallScreen?'342px':'412px',
        height:'100vh',
        padding:isSmallScreen?'24px':'40px 24px 40px 24px',
        background: 'white',
        overflow:'auto',
    }

    const handleChildClick = (event) => {
        event.stopPropagation();
    };
    return(

                <div style={overlayStyle} onClick={()=>hideCart()}>
                        <div onClick={handleChildClick} style={container}>
                            <div  className={'d-flex justify-content-between position-relative justify-content-lg-start'}>
                                <Heading level={6}>Cart</Heading>
                                {isSmallScreen &&
                                    <div className={'pointer-cursor'} onClick={()=>hideCart()}><CancelIcon/></div>}
                            </div>
                            <div class={'d-flex flex-column overflow-y-auto'}>
                                {value.products.map(p=><ProductCell product={p}/>)}
                            </div>
                        </div>
                </div>

    )
}
export default CartProductsToggle