import {useParams} from "react-router-dom";
import NavigationBar from "../../components/in-pages-reuseable-components/NavigationBar";
import ProductImagesSlider from "./ProductImagesSlider";

const product= {stockQuantity:10,productId:1,name:'Closet',isNew:true,discount:50,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/closet.jpg',isFavorite:false,description:'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.'}
const ProductPage = (props) => {
    const {category,productId}=useParams()
    console.log('category',category)
    console.log('id',productId)
  return(
      <>
          <NavigationBar activePage={'shop'}/>
          <ProductImagesSlider product={product}/>
      </>
  )

}
export default ProductPage