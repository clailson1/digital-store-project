import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import "../styles/SearchBar.css"

export default function BasicDemo() {
    return (
        <div className="flex">
             <form action="/produtos" target="_self" method="get" className="search-form">
                <IconField className="search-field">
                    <InputText id="filter" name="filter" placeholder="Pesquisar Produto..." required className="search-input"/>
                    <button type="submit" className="search-button">
                        <InputIcon className="pi pi-search"></InputIcon>
                    </button>
                </IconField>
            </form>
        </div>
    )
}
        