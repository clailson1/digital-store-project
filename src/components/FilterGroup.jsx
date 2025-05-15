import "../styles/FilterGroup.css"

const FilterGroup = ({ title, inputType, options }) => {
    return (  
        <div className="filter-group">
            <h3>{title}</h3>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <input
                            className="custom-checkbox"
                            type={inputType}
                            id={`option-${option.id}`}
                            name={title.toLowerCase()}
                            {...(option.value ? { value: option.value } : {})} // Só inclui o atributo `value` se existir
                        />
                        <label htmlFor={`option-${option.id}`}>
                            {option.text}
                        </label>
                    </div>
                ))}
            </div>   
        </div>  
    );
}
 
export default FilterGroup;