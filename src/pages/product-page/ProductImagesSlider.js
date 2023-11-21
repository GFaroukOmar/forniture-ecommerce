import {Swiper, SwiperSlide} from "swiper/react";
import Badge from "../../components/in-components-reuseable-components/Badge";
import {Navigation} from "swiper/modules";
const iconStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex:2

};
const ProductMainImageSlide=({product})=>{
    const style={
        backgroundImage:`url(${product.mainImage})`,
        backgroundColor: '#F3F5F7',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'multiply, normal',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        width: '548px',
        height: '729px',
    }
    return(<div style={style} >
                <div className={'d-inline-flex flex-column gap-4 mt-3 ms-3'}>
                    {product.isNew&&<Badge>new</Badge>}
                    {product.discount!==0&&
                        <Badge backgroundColor={'var(--green)'} textColor={'white'}>
                            {`-${product.discount}%`}
                        </Badge>
                    }
                </div>
    </div>)
}
const NextElementIcon=()=>{
    const style={
        ...iconStyles,
        right: '10px',
    }
    return (
        <svg style={style} id={'product-images-next-element'} width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_220_7876)">
                <rect x="56" y="48.5" width="40" height="40" rx="20" transform="rotate(-180 56 48.5)" fill="white"/>
                <path d="M43 28.5L29 28.5" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43 28.5L37 22.5" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M43 28.5L37 34.5" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_d_220_7876" x="0" y="0.5" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0364401 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_220_7876"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_220_7876" result="shape"/>
                </filter>
            </defs>
        </svg>

    )
}
const PreviousElementIcon=()=>{
    const style={
        ...iconStyles,
        left: '10px',
    }
    return(
        <svg style={style} id={'product-images-previous-element'} width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_220_7871)">
                <rect x="16" y="8.5" width="40" height="40" rx="20" fill="white"/>
                <path d="M29 28.5H43" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29 28.5L35 34.5" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29 28.5L35 22.5" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_d_220_7871" x="0" y="0.5" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0364401 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_220_7871"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_220_7871" result="shape"/>
                </filter>
            </defs>
        </svg>


    )
}
const ProductImagesSlider = ({product}) => {
  return(
        <div style={{width: '548px',height: '729px',}}>
          <Swiper style={{width:'100%'}} modules={[Navigation]}
                  loop
                  navigation={{
                      prevEl:'#product-images-previous-element',
                      nextEl:'#product-images-next-element'
                  }}
          >
              <SwiperSlide><ProductMainImageSlide product={product}/></SwiperSlide>
              <SwiperSlide><ProductMainImageSlide product={product}/></SwiperSlide>
              <SwiperSlide><ProductMainImageSlide product={product}/></SwiperSlide>
              <PreviousElementIcon/>
              <NextElementIcon/>
          </Swiper>
        </div>
      )
}
export default ProductImagesSlider