import Button from "../Button/Button";
import ShippingDetails from "./ShippingDetails";
const ShippingMethod=({acctwoHandler})=>{
    return(
    <div className="shipMethod_info">
       <ShippingDetails heading="Shipping Information" personalInfo={localStorage.getItem("firstName")?localStorage.getItem("firstName"):"NA"}/>        
        <h3>2. Shipping Method</h3>
       <form>
        <div className="radio_control">
            <input type="radio" name="styles" id="shipping" checked />
            <label for="shipping">Standard Shipping (4-8 business days via USPS) FREE</label>
        </div>
        <div className="radio_control">
            <input type="radio" name="styles" id="delivery"/>
            <label for="delivery">Express Delivery (2-5 business days via USPS) $17.95</label>
        </div>
        <div className="radio_control">
            <input type="radio" name="styles" id="nextday"/>
            <label for="nextday">Next Day Delivery (Next business days via FedEx) $53.61</label>
        </div>
            <div className="action">
                <Button arialabel="shipping information" text="CONTINUE TO PAYMENT" className="btn_lab shipping_button" onClick={acctwoHandler}/>
            </div>
        </form>
      

    </div>);
}

export default ShippingMethod;