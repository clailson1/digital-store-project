import "../styles/ProductOptions.css"

const ProductOptions = ({ options, radius, shape, type }) => {
    return (  
        <div>
            <p>{type === "text" ? "Tamanho" : "Cores"}</p>
        <div className="sizes1">
            {options.map((prodOption) => (
                shape === "square" ? (
                    <div key={prodOption.id}>
                        <div className="sizes2">
                            <div className="sizes3" style={type === "text" ? { borderRadius: radius, backgroundColor: prodOption.color } : { backgroundColor: prodOption.color}}>
                                { prodOption.size }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={prodOption.id}>
                        <div className="sizes2">
                            <div className="sizes3-circle" style={{ backgroundColor: prodOption.color}}>
                                
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
        </div>
    );
}
 
export default ProductOptions;