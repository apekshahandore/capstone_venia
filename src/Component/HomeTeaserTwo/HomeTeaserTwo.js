import homebanner3 from "../../Images/homebanner3.PNG"
import location from "../../Images/map-pin.svg";
import Button from "../Button/Button";
const HomeTeaserTwo=()=>{
return(
    <section className="aem-Grid aem-Grid--12 teaserbanner_two container">
       <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 teaserbanner-imgae">
              <img src={homebanner3} alt="herobanner"/>
              <div className="location_box">
               <img src={location} alt="location"/>
               <div className="border"></div>
             </div>
       </div>
     <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 teaserbanner-content">
           <div className="teasertwo_content">
              <h2>Conquer your <span className="hide">next adventure</span></h2>
              <p>Lorem Ipsum Dolor Tempor</p>
              <Button aria-label="shop devices" className="shop_devices btn_lab" text="Shop Devices"/>
           </div> 
    </div>
       
    </section>
);
}
export default HomeTeaserTwo;