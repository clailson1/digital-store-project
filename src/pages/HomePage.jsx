import Layout from "./Layout";
import Section from "../components/Section";
import "../styles/Homepage.css"
import { sectionObj } from "../data/sectionObject";

import Gallery from "../components/Gallery";
import { galleryObj } from "../data/gallery";
import { productObject } from "../data/productObject";

import ProductListing from "../components/ProductListing"

const HomePage = () => {

    return (  
        <Layout>
            <Gallery
                images={galleryObj} 
                width="1440" 
                height="681" 
                radius="4px" 
            />
            
            <Section title={"Coleções em destaque"} titleAlign={"center"} link={""}>
                <div className="featured-collections">
                    <img src="collection-1.png" alt="" />
                    <img src="collection-2.png" alt="" />
                    <img src="collection-3.png" alt="" />
                </div>
            </Section>
            <div className="trending-products">
                <Section title={"Produtos em alta"} titleAlign={"left"} link={sectionObj}>
                    <ProductListing products={productObject} />
                </Section>
            </div>
        </Layout>
    );
}
 
export default HomePage;