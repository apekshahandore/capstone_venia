import Button from "../Button/Button";
import React, {useState } from 'react'
import { useDispatch} from "react-redux";
import {cartActions} from "../../Redux/handleCartSlice";
import Rating from "../Rating/Rating";
import ProdDesc from "./ProdDesc"
import Quantity from "../Quantity/Quantity";
import Carousel from "../Carousel/Carousel";

const ProductDetailsTop=({title,price,rating,description,image, product})=>{
const dispatch = useDispatch();
let [num, setNum] = useState(1);

    const addProduct=(product,num)=>{ 
        // dispatch(cartActions.addProdToCart({...product, quntity:1}));
        dispatch(cartActions.addProdToCart(product, num));
    }
    let productTitle= title?.split(' ').slice(0,3).join(' ');
    
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }

    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };

    let handleChange = (e) => {
        setNum(e.target.value);
    }
    console.log(product.category);
 
    return(<>
    {/* productdetail page left part */}
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_image">
        
            <div className="aem-Grid aem-Grid--12">
                <div className="category_left">
                    <a href=" ">Clothing</a> / <a href=" ">{product.category}</a> / <a href=" ">OuterWear</a>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide images_column">
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure > 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                
                    <button> 
                    <img classname="imagesdown_arr" src={require('../../Images/chevron-down.svg').default}alt={title}/>  
                    </button>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 main_image">
                    <figure className="single_image"> 
                        <img src={image} alt={title}/>  
                    </figure>
                    <div className="prodGallary_images">
                    <Carousel image={image} title={title}/>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* productdetail page right part */}
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_details">
        {/* category */}
        <div className="category">
         <a href=" ">Clothing</a> / <a href=" ">{product.category}</a> / <a href=" ">OuterWear</a>
        </div>
        {/* product title */}
        <h1>{productTitle}</h1>

        {/* product price */}        
        <h4>${price}</h4>

        {/* rating */}  
        <Rating rating={rating}/>

        {/* product description */}
        <ProdDesc description={description}/>

    
        {/* Quantity */}
        <Quantity  decNum={decNum} incNum={incNum} num={num} handleChange={handleChange}/>

        {/* add to cart button */}
        <div className="addtocart">
        <Button text="ADD TO CART" arialabel="add to cart" className="btn_lab" onClick={()=>addProduct(product,num)}/>

        </div>

        {/* product response */}
            <div className="product_response">
                <a href=" "><img src={require('../../Images/heart.svg').default} alt='like' />Save</a>
                <a href=" "><img src={require('../../Images/share-2.svg').default} alt='share' />Share</a>
            </div>

        </div>
    </>)
}
export default ProductDetailsTop;