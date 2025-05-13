import ProductListing from "../components/ProductListing";
import { productObject } from "../data/Products";
import Layout from "./Layout";
import "../styles/ProductListingPage.css"
import Section from "../components/Section";
import { sectionObj } from "../data/sectionObject";
import FilterGroup from "../components/FilterGroup";
import { filterGroupObject } from "../data/filterGroup";

const ProductListingPage = () => {
    return (  
        <Layout>
            <div className="flex flex-wrap">
                <div >
                    <div className="flex">
                        Ordenar por
                    </div>
                    <div className="flex border-1 p-3">
                        Preço: mais barato
                    </div>
                    <div>
                        <FilterGroup title={"Marca"} inputType={"checkbox"} options={filterGroupObject}/>
                        <FilterGroup title={"Estado"} inputType={"radio"} options={filterGroupObject}/>
                    </div>
                </div>
                
                <div className="product-main-page">
                    <div className="product-list">
                        <Section title={"Produtos em alta"} titleAlign={"left"} link={sectionObj}>
                            <ProductListing products={productObject}/>
                        </Section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProductListingPage;