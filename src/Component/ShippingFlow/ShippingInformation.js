import React, {useState} from 'react';
import Button from "../Button/Button";
import InputBox from "../ContactInfo/InputBox";
import ContactInfo from "../ContactInfo/ContactInfo";
const ShippingInformation=({accHandler})=>{

const [formData, setFormData]=useState({
    email:" ", 
    phoneNumber:" ",
    firstName:" ",
    lastName:" ",
    add1:" ",
    add2:" ",
    city:" "

});
const inputHandler=(e)=>{
    const name= e.target.name;
    const value= e.target.value;
    setFormData({...formData,[name]:value});
}
    const submitHandler=(e)=>{
        e.preventDefault();
        alert("form save succesfully");
        console.log(formData);
        window.localStorage.setItem("formData", JSON.stringify(formData)); 
        accHandler();
        setFormData({ email:" ", 
        phoneNumber:" ",
        firstName:" ",
        lastName:" ",
        add1:" ",
        add2:" ",
        city:" "})
    }
    return(
        <>   
    <ContactInfo inputHandler={inputHandler} formData={formData}/>
    <div className="shipping_info">
        <h3>1. Shipping Information</h3>
   
        <form className="shipping_information ">
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <label>Country<br />
                <select className="county-select" aria-label="country select">
                    <option value="DEFAULT">United States</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Japan">Japan</option>
                </select>
                </label>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <InputBox type="text" 
            label="First Name" 
            name="firstName" 
            id="firstName" 
            value={formData.firstName} 
            onChange={inputHandler}/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
                <InputBox  type="text" 
                label="Last Name" 
                name="lastName" 
                id="lastName" 
                value={formData.lastName} 
                onChange={inputHandler}/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <InputBox 
            type="text"  
            name="add1" 
            id="add1" 
            value={formData.add1} 
              onChange={inputHandler}
            label="Street Address"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
                <InputBox  type="text" 
                name="add2" id="add2" 
                value={formData.add2} 
                onChange={inputHandler}
                label="Street Address 2"/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <InputBox type="text" 
            name="city" 
            id="city" 
            value={formData.city} 
            onChange={inputHandler}
            label="City"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 " style={{paddingRight:"16px"}}>
            <label>State<br />
            <select className="state-select" aria-label="state select">
                    <option value="DEFAULT">California</option>
                    <option value="India">Maharastra</option>
                    <option value="Pakistan">Gujrat</option>
                    <option value="Japan">Orisa</option>
                    <option value="Pakistan">Rajasthan</option>
                    <option value="Japan">Delhi</option>
                </select>
               </label>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
                <InputBox  type="number" label="ZIP"/>
            </div>
        </div>
        <div className="action">
            <Button arialabel="shipping information" text="CONTINUE TO SHIPPING METHOD" text1="CONTINUE" className="btn_lab shipping_button" onClick={submitHandler}/>
        </div>
        </form>
    </div>
    </>);
}

export default ShippingInformation;