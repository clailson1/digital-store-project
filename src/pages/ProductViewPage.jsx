import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import ProductOptions from "../components/ProductOptions";
import Layout from "./Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import "../styles/ProductViewPage.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductViewPage = () => {

    const [galleryProductData, setGalleryProductData] = useState([]);
    const [prodOptSize, setProdOptSize] = useState([]);
    const [prodOptColor, setProdOptColor] = useState([]);
    const [linkProdRecommended, setLinkProdRecommended] = useState([]);
    const [prodRecommendedList, setProdRecommendedList] = useState([]);
    const { id } = useParams(); // Obter o ID da URL
    const [productData, setProductData] = useState(null);
    
    async function galleryProductSlide() {
        const response = await axios.get('../src/data/galleryProductData.json');
        // console.log("galleryList response", response.data);
        setGalleryProductData(response.data);
    }

    async function prodOptionSize() {
        const response = await axios.get('../src/data/prodOptSize.json');
        // console.log("galleryList response", response.data);
        setProdOptSize(response.data);
    }

    async function prodOptionColor() {
        const response = await axios.get('../src/data/prodOptColor.json');
        // console.log("galleryList response", response.data);
        setProdOptColor(response.data);
    }

    async function linkProductRecommended() {
        const response = await axios.get('../src/data/linkProdRecommended.json');
        // console.log("galleryList response", response.data);
        setLinkProdRecommended(response.data);
    }

    async function productRecommendedList() {
        const response = await axios.get('../src/data/prodRecommendedList.json');
        // console.log("galleryList response", response.data);
        setProdRecommendedList(response.data);
    }
    
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get('../src/data/productData.json');
                const product = response.data.data.find(item => item.id === parseInt(id));
                setProductData(product);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        galleryProductSlide();
        prodOptionSize();
        prodOptionColor();
        linkProductRecommended();
        productRecommendedList();
        fetchProductData();
    }, [id]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (  
        <Layout>
            <div className="prod-view-page">
                <Gallery 
                    images={galleryProductData} 
                    width={ "700px" }
                    height={ "570px" } 
                    radius={ "4px" } 
                    showThumbs
                />
                <BuyBox 
                    name={productData.name}
                    reference={ "REF:38416711" } // Você pode adicionar isso aos seus dados se necessário
                    stars={ "4.7" }
                    rating={ "(90 Avaliações)" }
                    price={ productData.price.toString() }
                    priceDiscount={ productData.priceDiscount ? productData.priceDiscount.toString() : null }
                    description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco." }
                >
                    <div className="product-options">
                        <ProductOptions 
                            options={ prodOptSize } 
                            radius={ "4px" }
                            shape={ "square" }
                            type={ "text" }
                        />
                        <ProductOptions 
                            options={ prodOptColor } 
                            radius={ "" }
                            shape={ "circle" }
                            type={ "color" }
                        />
                    </div>
                </BuyBox>
            </div>
            <div className="prod-recomendado">
                <Section title={"Produtos recomendados"} titleAlign={"left"} link={linkProdRecommended}>
                    <ProductListing products={prodRecommendedList} />
                </Section>
            </div>
        </Layout>
    );
}
 
export default ProductViewPage;