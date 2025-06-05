import "../styles/ProductCard.css"

const ProductCard = ({ image, name, price, priceDiscount }) => {
    
    return (  
        <div className="product-card">
            <img src={image} alt={name} className="product-image"/>
            <h3 className="name-titulo-prod">{name}</h3>
            {
                priceDiscount ? (
                    <div className="product-values">
                        <div className="product-price" style={{ color: "var(--light-gray)"}}>
                            <s>
                                <h4>
                                    $ {price}
                                </h4>
                            </s>
                        </div>
                        <div className="product-price">
                            <h4 className="p-discount-h4">$ {priceDiscount}</h4>
                        </div>
                    </div> 
                ) : (
                    <div className="product-values">
                        <div className="product-price">
                            <h4 className="p-price-h4">$ {price}</h4>
                        </div>
                    </div>
                )
            }                     
        </div>
    );
};
 
export default ProductCard;