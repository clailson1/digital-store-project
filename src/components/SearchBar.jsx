import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    return (
        <div className="flex">
            <IconField iconPosition="right">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText placeholder="Pesquisar Produto..." />
            </IconField>
        </div>
    )
}
        