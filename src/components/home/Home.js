import React from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import Products from "./productsList";
const Home = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <Products/>
            <Footer/>
        </>
    )
}

export default Home