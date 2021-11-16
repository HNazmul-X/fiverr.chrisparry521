import React from "react";
import AllCollection from "./AllCollection";
import Header from "./Header";
import NewCollection from "./NewCollection";
import ServiceFee from "./ServiceFee";

const HomePage = () => {
    return (
        <>
            <Header />
            <NewCollection/>
            <ServiceFee/>
            <AllCollection/>
        </>
    );
};

export default HomePage;
