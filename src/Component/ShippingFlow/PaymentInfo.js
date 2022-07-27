import ShippingDetails from "./ShippingDetails";
import Button from "../Button/Button";
import InputBox from "../ContactInfo/InputBox";

const PaymentInfo=({accPay})=>{

    let newObject = window.localStorage.getItem("formData");
    console.log(JSON.parse(newObject));
    const getData = JSON.parse(newObject);

return(<>
   <ShippingDetails
        heading="Shipping Information"
        email={getData.email}
        contactDetails={getData.phoneNumber}
        fullName={getData.firstName + getData.lastName}
        address= {getData.add1 + getData.add2 + getData.city +" "+getData.state + getData.Zip }
        /> 
    <ShippingDetails heading="Shipping Method" shippingData={localStorage.getItem("shippingData")}/>
    <div className="payment_info">
           
        <h3>3. Payment Information</h3>
       <form>
        <div className="radio_control">
            <input type="radio" name="styles" id="credit" checked />
            <label for="credit">Credit Card</label>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <InputBox type="email" label="Name on Card"/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <InputBox type="email" label="Credit Card Number"/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 date_inputBox">
            <InputBox type="date" label="Expiration Date"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 cvv_inputBox">
            <InputBox type="text" label="CVV"/>
            </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 checkbox_control">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1">Billing address same as shipping address</label>
        </div>
        <div className="radio_control paypal_box">
            <input type="radio" name="paypal" id="default" />
            <label for="paypal">PayPal</label>
        </div>
            <div className="action">
                <Button arialabel="shipping information" text="CONTINUE TO REVIEW ORDER" className="btn_lab shipping_button" onClick={accPay} />
            </div>
        </form>
      

    </div>
</>
    
);
}
export default PaymentInfo;