import { Routes,Route } from "react-router-dom";
import React from 'react';
import HomePage from "../pages/Home";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<h1>This is about</h1>}/>
        </Routes>
    );
};

export default MainRouter;