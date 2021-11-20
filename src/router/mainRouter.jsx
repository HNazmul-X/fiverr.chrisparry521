import { Routes,Route } from "react-router-dom";
import React from 'react';
import HomePage from "../pages/Home/Home";
import Page2 from "../pages/Page2/Page2";
import Page3 from "../pages/Page3/Page3";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
        </Routes>
    );
};

export default MainRouter;