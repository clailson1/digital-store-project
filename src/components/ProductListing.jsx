import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import { Link } from "react-router-dom";

const ProductListing = ({ products }) => {
    return (  
        <ul className="product-list-ul">
            {products.map(product => (
                <li key={product.id} className="product-list-li">
                    <Link to={`/produtos/${product.id}`} className="product-link" style={{ display: "block" }}>
                        <ProductCard
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ProductListing;