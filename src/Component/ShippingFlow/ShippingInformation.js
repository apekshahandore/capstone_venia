import React, {useState} from 'react';
import Button from "../Button/Button";
import InputBox from "../ContactInfo/InputBox";
import ContactInfo from "../ContactInfo/ContactInfo";
const ShippingInformation=({accHandler})=>{
const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        alert("form save succesfully");
        accHandler();
    }
    return(
        <>   
    <ContactInfo />
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
            <InputBox type="text" label="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
                <InputBox  type="text" label="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <InputBox type="text" label="Street Address"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{paddingleft:"16px"}}>
                <InputBox  type="text" label="Street Address 2"/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{paddingRight:"16px"}}>
            <InputBox type="text" label="City"/>
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