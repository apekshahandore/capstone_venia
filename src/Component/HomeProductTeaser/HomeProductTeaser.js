import {category} from "../../Data"
import CategoryCard from "../Card/CategoryCard";
const HomeProductTeaser=()=>{
    return(
    <div className="aem-Grid aem-Grid--12 container category_teaser_wrapper">
    <div className="category_teaser">
        {
            category.map((curElem)=>{
                return <CategoryCard data={curElem}/>;
            })
        }
      
    </div>
   
    </div>);

}
export default HomeProductTeaser;