import {useState} from 'react'
import {FilledHeartIcon, HeartIcon} from "./Icons";
const AddToFavorite = ({addToFavorite,removeFromFavorite,isFavorite}) => {
    const [isActive,setIsActive]=useState(isFavorite)
    const handleClick=()=>{
        if (isActive)removeFromFavorite()
        else addToFavorite()
        setIsActive(!isActive);
    }
    return(
        <div className={'pointer-cursor'} onClick={handleClick}>
            {isActive?
                <div style={{padding:'8px 10px',backgroundColor:'white',borderRadius:'50%',}}><FilledHeartIcon/></div>
                :
                <div style={{padding:'8px 10px',backgroundColor:'white',borderRadius:'50%',}}><HeartIcon/></div>
            }
        </div>
    )
}
export default AddToFavorite