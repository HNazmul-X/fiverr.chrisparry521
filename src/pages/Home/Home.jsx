import React from "react";
import Header from "./Header";
import NewCollection from "./NewCollection";
import ServiceFee from "./ServiceFee";

const HomePage = () => {
    return (
        <>
            <Header />
            <NewCollection/>
            <ServiceFee/>
        </>
    );
};

export default HomePage;
