import { useParams } from "react-router-dom";
import { productObject } from "../data/Products";
import Gallery from "../components/Gallery";
import Layout from "./Layout";

const ProductViewPage = () => {
    const { id } = useParams(); // Obtém o ID da URL
    console.log("ID do produto:", id); // Verifique no console

    const product = productObject.find(item => item.id === parseInt(id)); // Converte o ID para número e encontra o produto
    console.log("Produto encontrado:", product); // Deve retornar o objeto do produto

    if (!product) {
        console.log("Produto não encontrado para ID:", id);
        return <div>Produto não encontrado!</div>; // Trata o caso em que o produto não existe
    }

    return (  
        <Layout>
            <div>
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.priceDiscount || product.price}</p>
            <Gallery 
                image={product.image} 
                width="500" 
                height="500" 
                radius="8px" 
            />
        </div>
        </Layout>
    );
}
 
export default ProductViewPage;