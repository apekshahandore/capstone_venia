import bannerImg from "../../../Images/producthero.PNG"
const ProductListingBanner=({text})=>{
return(
    <div className="aem-Grid aem-Grid--12 main_banner">
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 leftside_banner">
           <div>
           <h1>{text}</h1>
           <h1>Outerwear</h1>
           </div> 
            <div className="head_border"></div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 rightside_banner">
            <img src={bannerImg} alt="herobanner"/>
        </div>
    </div>
);
}
export default ProductListingBanner;