import React from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import Products from "./productsList";
const Home = () => {
    return (
        <div className="Home">
            <div className="wrapperHome">
                <Sidebar className="sidebar"/>
                <div className="wrapMain">
                    <Header/>
                    <Products/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home