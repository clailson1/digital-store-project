import "../styles/ProductListing.css"

const ProductCard = ({ products }) => {
    
    return (  
        <div className="product-card-global">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt="" className="product-image"/>
                    <h3>{product.name}</h3>
                    <div>
                        <div>
                            {product.priceDiscount}
                        </div>
                        <div>
                            R$ {product.price}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default ProductCard;