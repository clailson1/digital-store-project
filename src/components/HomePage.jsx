import Layout from "../pages/Layout";
import Section from "./Section";
import { sectionObj } from "../data/sectionObject";

import Gallery from "./Gallery";
import { galleryObj } from "../data/gallery";
import { productObject } from "../data/Products";

import ProductListing from "./ProductListing"

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
                <div className="flex gap-5">
                    <img src="collection-1.png" alt="" />
                    <img src="collection-2.png" alt="" />
                    <img src="collection-3.png" alt="" />
                </div>
            </Section>
            <Section title={"Produtos em alta"} titleAlign={"left"} link={sectionObj}>
                <ProductListing products={productObject} />
            </Section>
        </Layout>
    );
}
 
export default HomePage;