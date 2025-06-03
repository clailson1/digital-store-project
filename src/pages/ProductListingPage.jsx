import ProductListing from "../components/ProductListing";
import Layout from "./Layout";
import "../styles/ProductListingPage.css"
import Section from "../components/Section";
import FilterGroup from "../components/FilterGroup";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductListingPage = () => {

    const [productData, setProductData] = useState([]);
    const [filterGroup, setfilterGroup] = useState([]);


    async function products() {
        const response = await axios.get('../src/data/productData.json');
        console.log("products response", response.data.data);
        setProductData(response.data.data);

    }

    async function filter() {
        const response = await axios.get('../src/data/filterGroup.json');
        console.log("products response", response.data);
        setfilterGroup(response.data);

    }

    useEffect(() => {
        products();
        filter();
    }, []);

    return (  
        <Layout>
            <div className="product-page">
                <div className="product-filtering">
                    <div className="ordenar-por">
                        {/* Ordenar por */}
                        <div className="label-dropbox">
                            <label htmlFor="order-product">Ordenar por</label>
                        </div>
                        <div className="select-dropbox">
                            <select id="dropbox" name="dropbox">
                                <option value="menor">Menor Preço</option>
                                <option value="maior">Maior Preço</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="flex border-1 p-3">
                        Preço: mais barato
                    </div> */}
                    
                    <div className="product-checkbox">
                        <h3>Filtrar por</h3>
                        <hr />
                        <FilterGroup title={"Title 1"} inputType={"checkbox"} options={filterGroup} />
                        <FilterGroup title={"Title 2"} inputType={"checkbox"} options={filterGroup} />
                        <FilterGroup title={"Title 3"} inputType={"radio"} options={filterGroup} />
                    </div>
                </div>
                
                <div className="product-listing">
                    <Section title={`Total de produtos: ${productData.length}`} titleAlign={"left"} link={""}>
                        <ProductListing products={productData}/>
                    </Section>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProductListingPage;