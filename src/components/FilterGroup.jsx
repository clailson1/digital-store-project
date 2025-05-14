import "../styles/FilterGroup.css"

const FilterGroup = ({title, inputType, text, values}) => {
    return (  
        <div className="filter-group">
            <h3>{ title }</h3>
            <div>
                <input className={"custom-checkbox"} type={inputType} id="vehicle1" name="vehicle1" value={values}></input>
                <label htmlFor="vehicle1">{ text }</label>
            </div>   
        </div>  
    );
}
 
export default FilterGroup;