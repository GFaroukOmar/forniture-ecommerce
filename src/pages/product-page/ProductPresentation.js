import RatingStars from "../../components/in-components-reuseable-components/RatingStars";
import {Heading, Text} from "../../components/in-components-reuseable-components/TypographyComponents";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


const ColoredProductImage = ({colorObject,onClick,isClicked}) => {

  return(
      <img className={'pointer-cursor'} alt={'colored product'} width={'72px'} style={{minWidth:'72px',border:isClicked&&'solid black 2px'}} height={'72px'} src={colorObject.image}/>
  )
}

const CountDown=()=>{
    return (
        <div>
            <FlipClockCountdown
                to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                labelStyle={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase',color:'var(--neutral-04)'}}
                digitBlockStyle={{ width: 60, height: 60, fontSize: 34,backgroundColor:'var(--neutral-02)',color:'black'}}
                duration={0.5}>
                <Heading level={4}>Offer Expired</Heading>
            </FlipClockCountdown>
        </div>
    );
}
const ProductPresentation = ({product}) => {

    return(
        <div className={'d-flex flex-column'} style={{gap:"24px"}}>
            <div style={{borderBottom:'solid var(--neutral-03) 2px',gap:'16px'}} className={'d-flex flex-column'}>
                <div className={''}>
                    <RatingStars rating={product.rating}/>
                    <p>{product.reviews} Reviews</p>
                </div>
                <Heading level={4} >{product.name}</Heading>
                <Text color={'neutral-04'} size={16}>{product.description}</Text>
                <div className={'d-flex gap-4'}>
                    <Heading level={6}>${product.originalPrice.toFixed(2)}</Heading>
                    <Heading style={{textDecoration:'line-through'}} color={'neutral-04'} level={6}>${product.priceAfterDiscount.toFixed(2)}</Heading>
                </div>
            </div>
            <div style={{padding:'24px 0 24px ',borderBottom:'solid var(--neutral-03) 2px',gap:'16px'}} className={'d-flex flex-column'}>
                Offer expires in:
                <CountDown/>
            </div>
            <div style={{padding:'24px 0 24px ',gap:'24px'}} className={'d-flex flex-column'}>
                <diV>
                    <Text size={16} weight={'SemiBald'} color={'neutral-04'}>Measurements</Text>
                    <Text size={20} >{product.measurements}</Text>
                </diV>
                <Text size={16} weight={'SemiBald'} color={'neutral-04'}>Choose Color</Text>
                <div className={'d-flex overflow-x-auto'}>
                    {product.colors.map(colorObject=><ColoredProductImage isClicked={product.color === colorObject.color} onClick={null} colorObject={colorObject} /> )}
                </div>
            </div>
        </div>
    )
}
export default ProductPresentation