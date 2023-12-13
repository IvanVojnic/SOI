import React from "react";
import { products } from '../../core/API/data.js'

const Products = () => {
    return (
        <>
            <div />
            <h1>PRODUCTS</h1>

            <div>
                <div className="productItem">
                    <span className="ID">ID</span>
                    <span className="Type">Тема</span>
                    <span className="DateCreate">Запрошен</span>
                    <span className="DateComplete">Выполнен</span>
                    <span className="Status">Статус</span>
                    <span className="menu">...</span>
                </div>
                {products.map((eachProduct, index) => {
                    return (
                        <div className="productItem">
                            <span className="ID">{eachProduct.id}</span>
                            <span className="Type">{eachProduct.type}</span>
                            <span className="DateCreate">{eachProduct.dataCreate}</span>
                            <span className="DateComplete">{eachProduct.dataCompleted}</span>
                            <span className="Status">{eachProduct.status}</span>
                            <span className="menu">...</span>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;