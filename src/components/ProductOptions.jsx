import "../styles/ProductOptions.css"

const ProductOptions = ({ options, radius, shape }) => {
    return (  
        <div className="sizes1">
            {options.map((prodOption) => (
                shape === "square" ? (
                    <div key={prodOption.id}>
                        <div className="sizes2">
                            <div className="sizes3" style={{ borderRadius: radius}}>
                                { prodOption.size }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={prodOption.id}>
                        <div className="sizes2">
                            <div className="sizes3-circle" style={{ backgroundColor: prodOption.color}}>
                                { prodOption.size }
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}
 
export default ProductOptions;