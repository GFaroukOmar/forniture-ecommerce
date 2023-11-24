import {useParams} from "react-router-dom";
import NavigationBar from "../../components/in-pages-reuseable-components/NavigationBar";
import ProductImagesSlider from "./ProductImagesSlider";
import ProductPresentation from "./ProductPresentation";
const description='Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.'
const product={
    productId:1,
    name:'Tray table',
    description:description,
    rating:5,
    reviews:11,
    isNew:true,
    isFavorite:false,
    discount:50,
    originalPrice:400.00,
    priceAfterDiscount:200.10,
    defaultColor:'black',
    measurements:'17 1/2x20 5/8',
    colors:[
        {color:'black',mainImage:'/images/products/tray-table/black.jpg',images:[],stockQuantity:10,},
        {color:'red',mainImage:'/images/products/tray-table/red.jpg',images:[],stockQuantity:10,},
        {color:'brown',mainImage:'/images/products/tray-table/brown.jpg',images:[],stockQuantity:10,},
        {color:'white',mainImage:'/images/products/tray-table/white.jpg',images:[],stockQuantity:10,},
    ],
    images:['/images/products/tray-table/tray-table-1.jpg','/images/products/tray-table/tray-table-2.jpg',
        '/images/products/tray-table/tray-table-3.jpg',
        '/images/products/tray-table/tray-table-4.jpg']}
const ProductPage = () => {
    const {category,productId}=useParams()
    console.log('category',category)
    console.log('id',productId)
  return(
      <>
          <NavigationBar activePage={'shop'}/>
          <div className={'container d-flex'} style={{marginTop:'56px',gap:'64px'}}>
              <ProductImagesSlider product={product}/>
              <ProductPresentation product={product}/>
          </div>
      </>
  )
}
export default ProductPage