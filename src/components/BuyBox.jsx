import "../styles/BuyBox.css"
import starIcon from '../assets/star-icon.svg';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
    return (  
        <div className="buybox-component">
            <h3 className="product-name">{ name }</h3>
            <p className="product-reference">{ reference }</p>
            <div className="star-rating">
                <div className="star">
                    <h4>{ stars } </h4>
                    <div className="star-icon">
                        <img src={ starIcon } alt="" />
                    </div>
                </div>
                <h4>{ rating }</h4> 
            </div>
                {
                    priceDiscount ? (
                        <div className="price-discount">
                            <div className="discount-product-view">
                                $ {priceDiscount}
                            </div>
                            <div className="price-product-view" style={{ color: "var(--light-gray-2)", fontSize: "16px"}}>
                                <s>$ {price}</s>
                            </div>
                        </div> 
                    ) : (
                        <div className="price-discount">
                            <div className="price-product-view">$ {price}</div>
                        </div>
                    )
                }
            <p className="product-description">{ description }</p>
            <div className="children-section">
                { children } 
            </div>
            <button>Comprar</button>
        </div>
    );
}
 
export default BuyBox;