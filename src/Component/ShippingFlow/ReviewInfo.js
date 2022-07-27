import ShippingDetails from "./ShippingDetails";
import OrderItemContainer from "./OrderItemContainer";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const ReviewInfo=()=>{
      let navigate = useNavigate();
        //Change page
        const pageHandler=()=>{
            let path=`/order_confirmation`;
            navigate(path);
        }
return(<section className="review_order">
        <ShippingDetails heading="Shipping Information"/>
        <ShippingDetails heading="Shipping Method"/>
        <ShippingDetails heading="Payment Information"/>
        <OrderItemContainer />
        <div className="action">
            <Button arialabel="place order" text="Place Order" className="btn_lab placeorder_button" onClick={pageHandler}/>
        </div>
        <div className="action">
                <p>By clicking confirm order you agree to our <a href=" ">Terms and Conditions</a> </p>
        </div>
</section>

);
}
export default ReviewInfo;