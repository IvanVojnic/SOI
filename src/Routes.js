import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/home/Home";
const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/sign_up" element={<SignUp/>} />
                <Route path="/sign_in" element={<SignIn/>} />
                <Route path="/home" element={<Home />} />
                {/*<Route path="/" element={<h2>Page not found...</h2>} />*/}
            </Routes>
        </Router>
    );
};

export default AllRoutes;