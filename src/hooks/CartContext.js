
import createDataContext from "./createDataContext";
const cartReducer=(state,action)=>{

    switch (action.type){
        case 'add_to_cart':
            action.payload.quantity=1
            return {...state,products:[...state.products,action.payload]}
        case 'remove_from_cart':
            const newArray=state.products.filter(p=> p!==action.payload)
            return {...state,products:newArray}
        case 'decrease_quantity':
            const quantityDecreasedProductIndex=state.products.findIndex(p=>p===action.payload)
            if(state.products[quantityDecreasedProductIndex].quantity>1)state.products[quantityDecreasedProductIndex].quantity--;
            return {...state,products:[...state.products]}
        case 'increase_quantity':
            const quantityIncreasedProductIndex=state.products.findIndex(p=>p===action.payload)
            if(state.products[quantityIncreasedProductIndex].quantity < state.products[quantityIncreasedProductIndex].stockQuantity)state.products[quantityIncreasedProductIndex].quantity++;
            return {...state,products:[...state.products]}
        default:return state
    }
}
const increaseQuantity=(dispatch)=>{
    return (product)=>{dispatch({type:'increase_quantity',payload:product})}
}
const decreaseQuantity=(dispatch)=>{
    return (product)=>{dispatch({type:'decrease_quantity',payload:product})}
}
const addToCart = (dispatch) => {
    return (product)=>{dispatch({type:'add_to_cart',payload:product})}}
const removeFromCart = (dispatch) => {
    return (product)=>{dispatch({type:'remove_from_cart',payload:product})}
}

export const  {Context,Provider}=createDataContext(cartReducer,{addToCart,removeFromCart,increaseQuantity,decreaseQuantity},{products:[]})

