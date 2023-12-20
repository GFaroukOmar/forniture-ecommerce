import {useState} from "react";
import Badge from "../in-components-reuseable-components/Badge";
import AddToFavorite from "../in-components-reuseable-components/AddToFavorite";
import {Text} from "../in-components-reuseable-components/TypographyComponents";
import useSmallScreen from "../../hooks/useSmallScreen";
import {useLocation, useNavigate} from "react-router-dom";


import AddToCartButton from "../in-components-reuseable-components/AddToCartButton";
import RatingStars from "../in-components-reuseable-components/RatingStars";
import GoToLinkUnderlined from "../in-components-reuseable-components/GoToLinkUnderlined";
const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleProductClick = (product) => {
        const newPath = `/shop/${product.category}/${product.productId}/`;
        // Use the state property to force a rerender of the current route
        navigate(newPath, { state: { key: location.key + 1 } });
        window.scrollTo(0, 0);
    };
    const [isSmallScreen] =useSmallScreen()
    const [isOnHover, setIsOnHover] = useState(false)

    const badgesStyle={
        gap:'16px',
        display:'inline-flex'
    }
    const cardStyle={
        width:isSmallScreen?'231px':'262px',
        height:isSmallScreen?'308px':'348px',
        backgroundColor: '#F3F5F7',
        minWidth:isSmallScreen?'231px':'262px',
        borderRadius:'8px',
        backgroundImage:product.mainImage,
        backgroundSize:'30px 30px'
    }
    const imageContainerStyle={
        borderTopLeftRadius: '8px',
        borderTopRightRadius:'8px',
        width:"100%",
        height:"70%",
        backgroundImage:`url(${product.mainImage})`,
        backgroundColor: '#F3F5F7',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'multiply, normal',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }
    const handleMouseEnter = () => setIsOnHover(true)
    const handleMouseLeave = () => setIsOnHover(false)
  return(
      <div className={'d-flex flex-column gap-3'}>
          <div className={'d-flex flex-column'} style={cardStyle}
               onMouseEnter={handleMouseEnter}
               onClick={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
              <div style={imageContainerStyle}
                    className={'d-flex pointer-cursor justify-content-between'}>
                  <div className={'w-100 d-flex justify-content-between m-3'}>
                      <div className={'d-flex align-items-center flex-column'} style={badgesStyle}>
                          {product.isNew&&<Badge>new</Badge>}
                          {product.discount!==0?
                              <Badge backgroundColor={'var(--green)'} textColor={'white'}>
                                  {`-${product.discount}%`}
                              </Badge>
                              :null}
                      </div>
                      {isOnHover &&   <AddToFavorite isFavorite={product.isFavorite}
                                                     removeFromFavorite={()=>{
                          console.log('remove from favorites')}} addToFavorite={()=>{
                          console.log('add to favorites')}}/>}
                  </div>
              </div>

              {isOnHover &&
                  <div className={'d-flex flex-column align-items-center'}>
                      <div style={{marginBottom:'16px',flexGrow:'1',display:'flex',alignItems:'end',justifyContent:'center'}}> <AddToCartButton product={product}/></div>
                      <div className={'pointer-cursor'} onClick={()=>handleProductClick(product)}>go to product page -></div>
                  </div>
              }
          </div>
          <div>
              <RatingStars rating={product.rating}/>
              <Text size={16} weight={'SemiBald'}>{product.name}</Text>
              <div className={'d-flex gap-4'}>
                  <Text size={14} weight={'SemiBald'}>{`$${product.originalPrice}`}</Text>
                  {product.originalPrice!==product.priceAfterDiscount &&
                      <Text  style={{textDecoration:'line-through',textDecorationThickness:'2px'}}
                             size={14} color={'neutral-04'}
                             weight={'SemiBald'}>{`$${product.priceAfterDiscount}`}
                      </Text>}
              </div>
          </div>
      </div>
  )
}
export default ProductCard