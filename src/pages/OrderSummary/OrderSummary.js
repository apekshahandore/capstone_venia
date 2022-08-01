import instagramIcon from "../../Images/instagram.svg";
import facebookIcon from "../../Images/facebook.svg";
import twitterIcon from "../../Images/twitter.svg";
import OrderItemContainer from "../../Component/ShippingFlow/OrderItemContainer";
const OrderSummary=()=>{
    let id= Math.random().toString(36).slice(2);

    let newObject = window.localStorage.getItem("formData");
    console.log(JSON.parse(newObject));
    const getData = JSON.parse(newObject);

    let paymentDetails= window.localStorage.getItem("paymentData");
    const getpaymentData= JSON.parse(paymentDetails);

return(
    <section className='aem-Grid aem-Grid--12 container order_summary'>
    <div className='ordersum_heading'>
        <h1>Order Successful!</h1>
        <button className='border_link'></button>
    </div>
    <div className='aem-Grid aem-Grid--12'>
    <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 order_details'>
        <h3>Order Number #{id}</h3>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 order_details'>
                    <h4>Shipping Information</h4>
                    <p>{getData.email}</p>
                    <p>{getData.phoneNumber}</p>

                    <p>{getData.firstName}{getData.lastName}</p>    
                    <p>{getData.add1}</p>    
                    <p>{getData.city}</p>   
                    <p>United State</p>   
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 order_details'>
                <h4>Shipping Method</h4>
                <p>{localStorage.getItem("shippingData")}</p>

                <h4 >Payment Information</h4>
                <p>{getpaymentData.credit}</p>
                <p>{getpaymentData.cvv}</p>
                </div>
            </div>
            
        <OrderItemContainer />
        <p className="order_para">You will also receive an email with the details and we will let you know when your order has shipped.</p>
        <p className="order_para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
    </div>
    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 social_card'>
        <div className="follow_link">
            <h2>Give us a follow to SAVE 20% on your next order.</h2>
        </div>
            <div className="social_links">
                <figure>
                    <img src={instagramIcon} alt="instagram icon"/>
                </figure>
                <figure>
                <img src={facebookIcon} alt="facebook icon"/>
                </figure>
                <figure>
                <img src={twitterIcon} alt="twitter icon"/>
                </figure>
            </div>

    </div>


</div>
</section>
);
}
export default OrderSummary;