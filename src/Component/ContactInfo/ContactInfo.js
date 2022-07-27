import InputBox from "./InputBox";
const ContactInfo=()=>{
    return(
    <div className="contact_info">
        <h3>Contact information</h3>
        <p>We’ll use these details to keep you informed on your delivery.</p>
        <form className="aem-Grid aem-Grid--12 contact_form">
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
         <InputBox type="email" label="Email"/>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
            <InputBox  type="number" label="Phone Number"/>
        </div>
        </form>
    </div>);
}

export default ContactInfo;