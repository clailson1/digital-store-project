import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import { Link } from "react-router-dom";

const ProductListing = ({ products }) => {
    return (  
        <ul className="product-list-ul">
            {products.map(product => (
                <Link to={`/product/${product.id}`} className="product-link" style={{ display: "block" }}>
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                </Link>
            ))}
        </ul>
    );
}

export default ProductListing;