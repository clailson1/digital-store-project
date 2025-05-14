import ProductListing from "../components/ProductListing";
import { productObject } from "../data/Products";
import Layout from "./Layout";
import "../styles/ProductListingPage.css"
import Section from "../components/Section";
import { sectionObj } from "../data/sectionObject";
import FilterGroup from "../components/FilterGroup";
import { filterGroupObject } from "../data/filterGroup";


import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
        

const ProductListingPage = () => {

    const [productPrice, setproductPrice] = useState(null);
    const prods = [
        { name: 'Menor preço'},
        { name: 'Maior preço' }
    ];

    return (  
        <Layout>
            <div className="product-page">
                <div className="product-filtering">
                    <div className="ordenar-por">
                        {/* Ordenar por */}
                        <div className="card flex justify-content-center">
                        <Dropdown value={productPrice} onChange={(e) => setproductPrice(e.value)} options={prods} optionLabel="name" 
                            placeholder="Ordenar por" className="w-full md:w-14rem" />
                        </div>
            
                    </div>
                    {/* <div className="flex border-1 p-3">
                        Preço: mais barato
                    </div> */}
                    
                    <div className="product-checkbox">
                        <h3>Filtrar por</h3>
                        <hr />
                        <FilterGroup title={"Marca"} inputType={"checkbox"} options={filterGroupObject} text={"addidas"}/>
                        <FilterGroup title={"Estado"} inputType={"radio"} options={filterGroupObject}/>
                    </div>
                </div>
                
                <div className="product-listing">
                    <Section title={"Produtos em alta"} titleAlign={"left"} link={sectionObj}>
                        <ProductListing products={productObject}/>
                    </Section>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProductListingPage;