import ProductListing from "../components/ProductListing";
import { productObject } from "../data/Products";
import Layout from "./Layout";
import "../styles/ProductListingPage.css"
import Section from "../components/Section";
// import { sectionObj } from "../data/sectionObject"; 
import FilterGroup from "../components/FilterGroup";
import { filterGroupObject } from "../data/filterGroup";     

const ProductListingPage = () => {

    return (  
        <Layout>
            <div className="product-page">
                <div className="product-filtering">
                    <div className="ordenar-por">
                        {/* Ordenar por */}
                        <div className="label-dropbox">
                            <label for="cars">Ordenar por</label>
                        </div>
                        <select className="select-dropbox" id="cars" name="cars">
                            <option value="menor">Menor Preço</option>
                            <option value="maior">Maior Preço</option>
                        </select>
                    </div>
                    {/* <div className="flex border-1 p-3">
                        Preço: mais barato
                    </div> */}
                    
                    <div className="product-checkbox">
                        <h3>Filtrar por</h3>
                        <hr />
                        <FilterGroup title={"Title 1"} inputType={"checkbox"} options={filterGroupObject} />
                        <FilterGroup title={"Title 2"} inputType={"checkbox"} options={filterGroupObject} />
                        <FilterGroup title={"Title 3"} inputType={"checkbox"} options={filterGroupObject} />
                    </div>
                </div>
                
                <div className="product-listing">
                    <Section title={`Total de produtos: ${productObject.length}`} titleAlign={"left"} link={""}>
                        <ProductListing products={productObject}/>
                    </Section>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProductListingPage;