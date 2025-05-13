import "../styles/ProductCard.css"

const ProductCard = ({ image, name, price, priceDiscount }) => {
    
    return (  
        <div className="product-card">
            <img src={image} alt={name} className="product-image"/>
            <h3>{name}</h3>
            {
                priceDiscount ? (
                    <div className="product-values">
                        <div className="product-price" style={{ color: "var(--light-gray)"}}>
                            <s>$ {price}</s>
                        </div>
                        <div className="product-price">
                            $ {priceDiscount}
                        </div>
                    </div> 
                ) : (
                    <div className="product-values">
                        <div className="product-price">$ {price}</div>
                    </div>
                )
            }                     
        </div>
    );
};
 
export default ProductCard;