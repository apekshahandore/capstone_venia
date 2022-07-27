import {useDispatch} from "react-redux";
import { cartActions } from "../../Redux/handleCartSlice";

const  SingleCartItem =({img, title, price, id, item})=>{
    const dispatch = useDispatch();

    const removeItemFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
      }


    const count= item.cartQuantity;
    const increseCartQuntity = () => {
        dispatch(cartActions.increaseQuantity(item));
      }
      const decreseCartQuntity = () => {
        dispatch(cartActions.decreaseQuantity(item));
      }

    
    let productTitle= title?.split(' ').slice(0,3).join(' ');
        return(<>
           <div className='aem-Grid aem-Grid--12 single_cartItem'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 singlecart_left'>
                    <figure>
                        <img  src={img} alt=''/>
                    </figure>
                </div>


                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--6 singlecart_middle'>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                            <strong>{productTitle}</strong>
                            <p>Size : Medium</p>
                            <p>Color : Medium</p>
                            <p>${price}</p>
                       
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 singlecart_right'>
                               <div className="center">
                                <button 
                                 type="button"
                                 aria-label="Decrement value"
                                 onClick={decreseCartQuntity}>-</button>
                                <input type="text" value={count} />
                                <button 
                                type="button"
                                 aria-label="Increment value"
                                 onClick={increseCartQuntity}>+</button>
                              
                                </div>
                        </div>
       
                    </div>
                </div>
   
                <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide singleCart_action'>
                <ul>
                    <li><button><img src={require('../../Images/edit-2.svg').default} alt='like' />Edit Items</button></li>
                    <li><button onClick={removeItemFromCartHandler}><img src={require('../../Images/trash-2.svg').default} alt='like' />Remove</button></li>
                    <li><a href=' '><img src={require('../../Images/heart.svg').default} alt='like' /> Save for later</a></li>
                </ul>
                        
                </div>
            </div>            
                       

              
            
        </>)
}
export default SingleCartItem;