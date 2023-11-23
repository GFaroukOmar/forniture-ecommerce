import RatingStars from "../../components/in-components-reuseable-components/RatingStars";
import {Heading} from "../../components/in-components-reuseable-components/TypographyComponents";
import {Text} from '../../components/in-components-reuseable-components/TypographyComponents'
import FlipCountdown from '@rumess/react-flip-countdown';

const CountDown=()=>{
    return (
        <div style={{width:'300px'}}>
            <FlipCountdown hideYear  size={'small '} theme={'light'}
                           endAt={'2023-12-12 20:16:00'} // Date/Time
            />
        </div>
    );
}
const ProductPresentation = ({product}) => {

    return(
        <div className={'d-flex flex-column'} style={{gap:"24px"}}>
            <div style={{borderBottom:'solid var(--neutral-03) 2px',gap:'16px'}} className={'d-flex flex-column'}>
                <div className={'d-flex align-items-start gap-2'}>
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
            <CountDown/>
        </div>
    )
}
export default ProductPresentation