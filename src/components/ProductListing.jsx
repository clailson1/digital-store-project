import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";

const ProductListing = ({ products }) => {
    return (  
        <ul className="product-list-ul">
            {products.map(product => (
                <li key={product.id} className="product-list-li">
                    <ProductCard   
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ProductListing;