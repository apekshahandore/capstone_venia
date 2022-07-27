import {filterColor,mobileFilterSize,mobileFilterStyle,mobileFilterBrand} from "../../Data";
// import Button from "../../Component/Button";
import closeIcon from "../../Images/x.svg"
const MobileSideBar=({onClose})=>{
   const closeSideBar=()=>{
    onClose();
   }
    return(<>
            <aside className="mobilefilter_menu container" >
            <nav>
                <ul>
                    <li>Filters</li>
                    <li onClick={closeSideBar}><img src={closeIcon} alt="close_icon"/></li>
                </ul>
            </nav>
            <div className="mobile_btnsection">
                <button className="selected_btn"><img src={closeIcon} alt="close_icon"/> Black</button>
                <button className="clear_btn">Clear all</button>
            </div>
            <div className="color">  
                    <h6>Color</h6>
                    <div className="filter_color">
                    
                    {filterColor.map((value)=>{
                        return(<div 
                                key={value.id} 
                                className={value.className} 
                                style={{backgroundColor:`${value.color}`, border:`${value.border}`}}
                                >
                                </div>)
                    })}
                    
                    </div>
                    
                
                </div>
                <div className="attribute">  
                    <h6>Size</h6>
                    {mobileFilterSize.map((value)=>{
                        return(<div className="checkbox"> 
                                <input type="checkbox"/> 
                                <label className="container">{value.size}</label>
                        </div>)
                    })}
                
                </div>
                <div className="attribute">  
                    <h6>Style</h6>
                    {mobileFilterStyle.map((value)=>{
                        return(<div className="checkbox"> 
                                <input type="checkbox"/> 
                                <label className="container">{value.style}</label>
                        </div>)
                    })}
                
                </div>
                <div className="attribute">  
                    <h6>Brand</h6>
                    {mobileFilterBrand.map((value)=>{
                        return(<div className="checkbox"> 
                                <input type="checkbox"/> 
                                <label className="container">{value.brand}</label>
                        </div>)
                    })}
                    <div className="checkbox"> 
                        <a href=" ">Show More</a>
                    </div>
                </div>
                <div className="allresult_box">
                {/* <Button className="btn_lab all_result" text="SEE 137 RESULTS "/> */}
                </div>
                
            </aside>
    </>)
}
export default MobileSideBar;