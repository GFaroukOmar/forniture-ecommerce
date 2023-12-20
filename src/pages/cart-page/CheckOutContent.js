import {Heading, Text} from "../../components/in-components-reuseable-components/TypographyComponents";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../hooks/CartContext";
import {CancelIcon, CircleNumber, PaymentMethodIcon} from "../../components/in-components-reuseable-components/Icons";
import ProductInCartQuantityControl
    from "../../components/in-components-reuseable-components/ProductInCartQuantityControl";
import useSmallScreen from "../../hooks/useSmallScreen";
const SmallScreenProduct=({product})=>{
    const value=useContext(Context);
    function removeFromCart(product){
        value.removeFromCart(product);
    }
    return(<div className={'d-flex align-items-start justify-content-between'} style={{width:'295px',padding:'24px 0'}}>
        <div className={'d-flex'} style={{gap:'16px',width:'316px'}}>
            <img  height={'96px'} width={'80px'} alt={''} src={product.mainImage}/>
            <div className={'d-flex flex-column gap-1'}>

                <Text size={14} weight={'SemiBald'}>{product.name}</Text>

                <Text size={12} color={'neutral-04'} weight={'AverageBald'}>Color:{product.color}</Text>

                <ProductInCartQuantityControl
                    style={{height:'32px',
                        width:'80px',
                        border: '1px solid var(--neutral-04100, #6C7275)',
                        borderRadius:'4px'
                    }}
                    className={'d-flex justify-content-between align-items-center'} product={product}/>
            </div>
        </div>
        <div className={'w-25'}>
            <Text size={18}  weight={'Bald'}>${product.priceAfterDiscount*product.quantity}</Text>
            <div  onClick={()=>removeFromCart(product)}><Text size={18}  weight={'Bald'} color={'neutral-04'}><CancelIcon/></Text></div>
        </div>

    </div>)
}
const Step1Content=({setStep})=>{
    const [isSmallScreen]=useSmallScreen()
    // const value=useContext(Context);
    const ProductsTable = () => {
        function removeFromCart(product){
            value.removeFromCart(product);
        }
        const ProductConsultation = ({product}) => {
            // const value=useContext(Context);
            if (isSmallScreen)
                return (
                    <SmallScreenProduct product={product}/>
                    )
            return(
                <div className={'d-flex align-items-center'} style={{width:'643px',padding:'24px 0 24px 0'}}>
                    <div className={'d-flex'} style={{gap:'16px',width:'316px'}}>
                        <img  height={'96px'} width={'80px'} alt={''} src={product.mainImage}/>
                        <div className={'d-flex flex-column gap-3'}>
                            <Text size={14} weight={'SemiBald'}>{product.name}</Text>
                            <Text size={12} color={'neutral-04'} weight={'AverageBald'}>Color:{product.color}</Text>
                            <div className={'pointer-cursor'} onClick={()=>removeFromCart(product)}><Text size={14} color={'neutral-04'} weight={'SemiBald'}><CancelIcon/>Remove</Text></div>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-between align-items-center'} style={{width:'328px'}}>
                        <ProductInCartQuantityControl style={{height:'32px',width:'80px',border: '1px solid var(--neutral-04100, #6C7275)',borderRadius:'4px'}} className={'d-flex justify-content-between align-items-center'} product={product}/>
                        <Text size={18}  weight={'AverageBald'}>${product.priceAfterDiscount}</Text>
                        <Text size={18}  weight={'Bald'}>${product.priceAfterDiscount*product.quantity}</Text>
                    </div>
                </div>
            )
        }
        const value=useContext(Context);
        const tableHeadStyle={
            display: 'flex',
            width: isSmallScreen?'312px': '643px' ,
            paddingBottom:'24px',
            borderBottom:'solid 2px black',
            justifyContent:'start',
        }
        return(
            <div>
                <div style={tableHeadStyle}>
                    <Text size={16} style={{width:'310px'}} weight={'SemiBald'}>Product</Text>
                    {!isSmallScreen &&
                        (<>
                            <Text style={{width:'109px'}} className={'text-center pe-4'} size={16} weight={'SemiBald'}>Quantity</Text>
                            <Text style={{width:'110px'}}   size={16} weight={'SemiBald'} className={'ps-5 text-center'}>Price</Text>
                            <Text size={16} weight={'SemiBald'} style={{width:'109px'}}  className={'ps-5 text-center'}>Subtotal</Text>
                        </>)

                    }
                </div>
                {value.products.map(p=><ProductConsultation product={p}/>)}
            </div>
        )
    }
    const ShippingOptions=({setStep})=>{
        const [checked, setChecked] = useState(1)
        const containerStyles = {
            display: 'flex',
            width: isSmallScreen?'312px':'413px',
            padding: isSmallScreen?'16px':'24px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            borderRadius: '6px',
            border: '1px solid #6C7275',
            background: '#FFF',
        }
        const buttonStyle = {
            display: 'flex',
            width: isSmallScreen?'280px':'365px',
            padding: '10px 26px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '8px',
            background: 'black',
            color:'#FFF'
        };
        const ShippingOption = ({type,price,check,setCheck,value}) => {
            const style={
                padding:'13px 16px 13px 16px',
                width: isSmallScreen?'280px':'365px',
                justifyContent: 'space-between',
                display:'flex',
                borderRadius: '4px',
                border: '1px solid var(--neutral-04100, #6C7275)',
                background: check ?'var(--neutral-02)':'none'
            }
            return(
                <div style={style} onClick={()=>setCheck(value)} className={'pointer-cursor'}>
                    <div>
                        <div className={'d-flex gap-2 align-items-center'}>
                            <input type="radio" value={value} className={'pointer-cursor'} checked={check} />
                            <Text size={16} weight={'AverageBald'}>{type}</Text>
                        </div>
                    </div>
                    <Text size={16} weight={'AverageBald'}>${price}</Text>
                </div>
            )
        }
        return(
            <div style={containerStyles} >
                <Heading level={7}>Cart summary</Heading>
                <div className={'d-flex flex-column'} style={{gap:'16px'}}>
                    <ShippingOption type={'Free Shipping'} price={0} check={checked===1} value={1} setCheck={setChecked}/>
                    <ShippingOption type={'Express Shipping'} price={15} check={checked===2} value={2} setCheck={setChecked}/>
                    <ShippingOption type={'Express Shipping'} price={15} check={checked===3} value={3} setCheck={setChecked}/>
                </div>
                <div style={{width:'100%', display:'flex',padding: '13px 0px',justifyContent:'space-between',borderBottom: '1px solid var(--Black-200, #EAEAEA)',}}>
                    <Text size={16} weight={'AverageBald'}>Subtotal</Text>
                    <Text size={16} weight={'SemiBald'}>$900</Text>
                </div>
                <div style={{width:'100%', display:'flex',padding: '13px 0px',justifyContent:'space-between',}}>
                    <Text size={20} weight={'SemiBald'}>Total</Text>
                    <Text size={20} weight={'SemiBald'}>$900</Text>
                </div>
                <div className={'pointer-cursor'} onClick={()=>setStep(2)} style={buttonStyle}>Checkout</div>
            </div>
        )
    }

    return(
        <div className={'container'} style={{display:'flex',flexDirection:isSmallScreen?'column':'row',justifyContent:isSmallScreen?'center':'space-between',flexWrap:'wrap',alignItems:isSmallScreen?'center':"start",padding:'80px 0 80px 0'}}>
            <ProductsTable/>
            <ShippingOptions setStep={setStep}/>
        </div>
    )
}
const Step2Content=({setStep})=>{
    const [isSmallScreen]=useSmallScreen()
    const Form = ({setStep}) => {
        const CustomInput = ({value,label,placeHolder,width='100%'}) => {
            return(
                <div className={'d-flex flex-column gap-2'}>
                    <Text  size={16} weight={'Bald'}  color={'neutral-04'}>{label.toString().toUpperCase()}</Text>
                    <input placeholder={placeHolder} type={'text'} value={value} style={{border: '1px solid var(--Black-300, #CBCBCB)',padding:'7px 16px',borderRadius:'6px',width:width}}  />
                </div>
            )
        }
        const containersStyle={
            padding:isSmallScreen?'24px 16px':'40px 24px',
            width:isSmallScreen?'312px':'643px',
            borderRadius: '4px',
            border: '1px solid var(--neutral-04100, #6C7275)',
            display:'flex',
            flexDirection: 'column',
            gap:'24px'
        }
        const ContactInformation=()=>{
            return(
                <div style={containersStyle}>
                    <Heading level={6}>Contact Information</Heading>
                    <div className={'d-flex w-100 justify-content-between'}>
                        <CustomInput value={''} placeHolder={'First name'} label={'First name'}/>
                        <CustomInput value={''} placeHolder={'Last name'} label={'First name'} />
                    </div>
                    <CustomInput value={''} placeHolder={'Phone number'} width={'100%'} label={'phone number'} />
                    <CustomInput value={''} placeHolder={'Your Email'} width={'100%'} label={'email address'} />
                </div>
            )
        }
        const ShippingAddress=()=>{
            return(
                <div style={containersStyle}>
                    <Heading level={6}>Shipping Address</Heading>
                    <CustomInput value={''} placeHolder={'Street Address'} label={'Street Address *'}/>
                    <CustomInput value={''} placeHolder={'Country '} label={'Country *'} />
                    <CustomInput value={''} placeHolder={'Town/city'} width={'100%'} label={'Town/city *'} />
                    <div className={'d-flex w-100 justify-content-between'}>
                        <CustomInput value={''} placeHolder={'State'} label={'state'}/>
                        <CustomInput value={''} placeHolder={'Zip Code'} label={'zip code *'} />
                    </div>

                </div>
            )
        }
        const PaymentMethod=()=>{
            const [selectedMethod, setSelectedMethod] = useState(1)
            const PaymentMethodSelect = ({method,isSelected,setSelected,value,showIcon}) => {
              return(
                  <div className={'d-flex justify-content-between pointer-cursor'} onClick={()=>setSelected(value)}  style={{backgroundColor:isSelected?'var(--neutral-02)':'white',borderRadius: '4px',border: '1px solid #141718',padding:'13px 16px'}}>
                      <div className={'d-flex align-items-center gap-2'}>
                          <input checked={isSelected} value={value} type={"radio"}/>
                          <Text size={15} weight={'AverageBald'}>{method}</Text>
                      </div>
                      {showIcon &&<PaymentMethodIcon width={24} height={24}/>}
                  </div>
              )
            }
            return(
                <div style={containersStyle}>
                    <Heading level={6}>Payment Method</Heading>
                    <div className={'d-flex gap-3 flex-column w-auto'} style={{padding:'24px 0',borderBottom: '1px solid #6C7275'}}>
                        <PaymentMethodSelect showIcon method={'Pay by Card Credit'} value={1} isSelected={selectedMethod===1} setSelected={setSelectedMethod}/>
                        <PaymentMethodSelect method={'Paypal'} isSelected={selectedMethod===2} value={2} setSelected={setSelectedMethod} />
                    </div>
                    <CustomInput value={''} placeHolder={'1234 1234 1234'} label={'card number'}/>
                    <div className={'d-flex justify-content-between'}>
                        <CustomInput value={''} placeHolder={'MM/YY'} label={'expiration date'}/>
                        <CustomInput value={''} placeHolder={'CVC Code'} label={'cvc'}/>
                    </div>
                </div>

            )
        }
        return(
            <div className={'d-flex flex-column align-items-center'} style={{gap:'24px'}}>
                <ContactInformation/>
                <ShippingAddress/>
                <PaymentMethod/>
                {!isSmallScreen && <div onClick={()=>setStep(3)} className={'pointer-cursor'} style={ { color:'white',backgroundColor:'black', borderRadius: '8px', display: 'flex', width: isSmallScreen?'312px':'643px', padding: '12px 40px', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    Place Order
                </div>}

            </div>
        )
    }
    const OrderSummary=()=>{
        const value = useContext(Context)
        const CartProduct=({product})=>{
            if(isSmallScreen) return(<SmallScreenProduct product={product}/>)
            return(
                    <div className={'d-flex justify-content-between'} style={{padding:'24px 0',borderBottom:'1px solid var(--neutral-03)'}}>
                        <div className={'d-flex'} style={{gap:'16px'}}>
                            <img  height={'96px'} width={'80px'} alt={''} src={product.mainImage}/>
                            <div className={'d-flex flex-column justify-content-between'}>
                                <Text size={14} weight={'SemiBald'}>{product.name}</Text>
                                <Text size={12} color={'neutral-04'} weight={'AverageBald'}>Color:{product.color}</Text>
                                <ProductInCartQuantityControl product={product}/>
                            </div>
                        </div>
                        <div className={'d-flex flex-column gap-1'}>
                            <Text size={14}  weight={'SemiBald'}>${product.quantity*product.priceAfterDiscount}</Text>
                            <Text size={14} color={'neutral-04'} weight={'SemiBald'}><CancelIcon/></Text>
                        </div>
                    </div>
            )
        }
        return(
            <div style={{padding:'16px 24px',height:'fit-content',borderRadius: '6px',border: '1px solid #6C7275'}}>
                <div className={'d-flex flex-column'} style={{gap:'24px',width:isSmallScreen?'300px':'412px'}}>
                    <Heading level={6}>Order Summary</Heading>
                    {value.products.map(p=><CartProduct product={p}/>)}
                </div>

            </div>
        )
    }
    return(
        <div className={'container d-flex gap-3'} style={{flexDirection:isSmallScreen?'column':'row',justifyContent:isSmallScreen?'center':'space-between',alignItems:'center',padding:'80px 0'}}>
            <Form setStep={setStep}/>
            <OrderSummary/>
            {isSmallScreen && <div onClick={()=>setStep(3)} className={'pointer-cursor'} style={ { color:'white',backgroundColor:'black', borderRadius: '8px', display: 'flex', width: isSmallScreen?'312px':'643px', padding: '12px 40px', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Place Order
            </div>}
        </div>
    )
}
const Step3Content=()=>{
    const [isSmallScreen]=useSmallScreen()
    const value=useContext(Context);
    const PurchasedProduct=({product})=>{
        const bgStyle={
            position: 'relative',
            width:'80px',
            height:'96px',
            background:`url(${product.mainImage})`,
            backgroundColor:'lightgray',
            backgroundBlendMode:'multiply',
            backgroundPosition:'center',
            backgroundSize:'cover'
        }
        const circlePosition={
            position: 'absolute',
            top: '0',
            right: '0',
            transform:' translate(50%, -50%)',
        }
        return(
            <div style={bgStyle}>
                <div style={circlePosition}><CircleNumber width={'24px'} height={'24px'} number={product.quantity}/></div>
            </div>
        )
    }
    if (isSmallScreen) return(
        <div className={'d-flex justify-content-center'}>

            <div  style={{height:'fit-content',gap:'40px',width:'312px',padding:'16px'}} className={'m-5 d-flex flex-column justify-content-start align-items-start shadow'}>
                {/*title*/}
                <Heading className={'text-center mb-0'} level={6}>Thank you!</Heading>
                <Heading style={{width:'280px',}} level={5}>Your order has been received</Heading>
                {/*products*/}
                <div style={{gap:'56px'}} className={'d-flex flex-wrap justify-content-center'}>
                    {value.products.map(p=><PurchasedProduct product={p}/>)}
                </div>
                {/*purchase details*/}
                <div className={'d-flex justify-content-center'} style={{gap:'32px'}}>
                    <div>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Order code:</Text>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Date:</Text>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Total:</Text>
                    </div>
                    <div>
                        <Text size={14}  weight={'SemiBald'}>#0123_45678</Text>
                        <Text size={14}  weight={'SemiBald'}>October 19, 2023</Text>
                        <Text size={14}  weight={'SemiBald'}>$1,345.00</Text>
                    </div>
                </div>
                <div className={'pointer-cursor'} style={{display: 'flex',justifyContent:'center',color:'white',borderRadius: '80px',background:'#141718',width: '280px',padding: '12px 40px'}} onClick={()=> window.location.href = "/"}>
                    Go back
                </div>
            </div>
        </div>
    )
    return(
        <div className={'d-flex justify-content-center'}>

            <div  style={{height:'fit-content',gap:'40px',width:'738px',padding:'80px 95px 64px 95px'}} className={'m-5 d-flex flex-column justify-content-start align-items-center shadow'}>
                {/*title*/}
                <Heading className={'text-center mb-0'} level={6}>Thank you!</Heading>
                <Heading style={{width:'492px',textAlign:'center'}} level={4}>Your order has been received</Heading>
                {/*products*/}
                <div style={{gap:'56px'}} className={'d-flex flex-wrap justify-content-center'}>
                    {value.products.map(p=><PurchasedProduct product={p}/>)}
                </div>
                {/*purchase details*/}
                <div className={'d-flex justify-content-center'} style={{gap:'32px'}}>
                    <div>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Order code:</Text>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Date:</Text>
                        <Text size={14} color={'neutral-04'} weight={'SemiBald'}>Total:</Text>
                    </div>
                    <div>
                        <Text size={14}  weight={'SemiBald'}>#0123_45678</Text>
                        <Text size={14}  weight={'SemiBald'}>October 19, 2023</Text>
                        <Text size={14}  weight={'SemiBald'}>$1,345.00</Text>
                    </div>
                </div>
                <div className={'pointer-cursor'} style={{display: 'flex',justifyContent:'center',color:'white',borderRadius: '80px',background:'#141718',width: '280px',padding: '12px 40px'}} onClick={()=> window.location.href = "/"}>
                    Go back
                </div>
            </div>
        </div>
    )
}
const CheckOutContent = ({step,setStep}) => {
    useEffect(() => {
        window.scrollTo({top:0,behavior:'smooth'})
    }, [step]);
    if (step===1) return <Step1Content setStep={setStep} />
    if (step===2) return <Step2Content setStep={setStep}/>
    if (step===3) return <Step3Content/>
}

export default CheckOutContent