import {Heading} from "../../components/in-components-reuseable-components/TypographyComponents";
import ProductCard from "../../components/product-cards/ProductCard";
import GoToLinkUnderlined from "../../components/in-components-reuseable-components/GoToLinkUnderlined";

//fetch api get data
const products=[
    {stockQuantity:10,productId:1,name:'Closet',isNew:true,discount:50,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/closet.jpg',isFavorite:false},
    {stockQuantity:10,productId:2,name:'Table Lamp',isNew:true,discount:0,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/lamp-short.jpg',isFavorite: false},
    {stockQuantity:10,productId:3,name:'Beige Lamp',isNew:false,discount:20,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/lamp-middle.jpg',isFavorite: false},
    {stockQuantity:10,productId:4,name:'LoveSeat Sofa',isNew:false,discount:20,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/holder.jpg',isFavorite: false},
    {stockQuantity:10,productId:5,name:'LoveSeat Sofa',isNew:false,discount:20,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/toast.jpg',isFavorite: false},
    {stockQuantity:10,productId:6,name:'LoveSeat Sofa',isNew:false,discount:20,rating:5,originalPrice:400,priceAfterDiscount:200,color:'default',mainImage:'/images/products/table-black.jpg',isFavorite: false},
]
const ProductCarousel = () =>{

  return(
      <div style={{marginTop:'48px'}} className={'container'}>
          <div className={'d-flex justify-content-between'}>
              <Heading className={'LittleBald'} level={4} c>New<br/>Arrivals</Heading>
              <div className={'align-self-center'}><GoToLinkUnderlined link={`/products`}>More Products</GoToLinkUnderlined></div>
          </div>

          <div className={'d-flex gap-3 overflow-x-scroll h-auto mb-3'} id={'product-carousel-scroll'}>
              {products.map(p=><div className={'mb-3'}>
                  <ProductCard
                      product={p}
                      productId={p.productId}
                      name={p.name}
                      mainImage={p.mainImage}
                      isNew={p.isNew}
                      discount={p.discount}
                      isFavorite={p.isFavorite}
                      rating={p.rating}
                      originalPrice={p.originalPrice}
                      priceAfterDiscount={p.priceAfterDiscount}
                  ></ProductCard>
              </div>)}
          </div>
  </div>)
}
export default ProductCarousel