import {useParams} from "react-router-dom";
import NavigationBar from "../../components/in-pages-reuseable-components/NavigationBar";
import ProductImagesSlider from "./ProductImagesSlider";
import ProductPresentation from "./ProductPresentation";

const product=     {description:'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.',stockQuantity:10,productId:1,name:'Closet',reviews:11,isNew:true,discount:50,rating:5,originalPrice:400.00,priceAfterDiscount:200.10,color:'default',mainImage:'/images/products/closet.jpg',isFavorite:false,images:['/images/products/tray-table/tray-table-1.jpg','/images/products/tray-table/tray-table-2.jpg','/images/products/tray-table/tray-table-3.jpg','/images/products/tray-table/tray-table-4.jpg']}
const ProductPage = (props) => {
    const {category,productId}=useParams()
    console.log('category',category)
    console.log('id',productId)
  return(
      <>
          <NavigationBar activePage={'shop'}/>
          <div className={'container d-flex'}>
              <ProductImagesSlider product={product}/>
              <ProductPresentation product={product}/>
          </div>
      </>
  )

}
export default ProductPage