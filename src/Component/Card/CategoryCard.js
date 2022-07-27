
const CategoryCard=({data})=>{
    return(
    <>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 category_card">
            <img src={data.img} alt="womenCategory"/>
            <div class="overlay">
                <h4>{data.name}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    </>);

}
export default CategoryCard;