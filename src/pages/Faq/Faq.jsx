import { Typography } from "@mui/material";
import React from "react";
import mock_image from "../../images/196.webp";

const FaqPage = () => {
    return (
        <div id="Faq" className="mt-5 pt-3">
            <div className="faq-container">
                <Typography my={4} variant="h5">
                    Frequently Asked Question
                </Typography>
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
            </div>
        </div>
    );
};

const FaqCard = () => {
    return (
        <>
            <div className="d-flex faq-card">
                <div className="faq-card__image">
                    <img src={mock_image} alt="" />
                </div>
                <div className="faq-card__text">
                    <Typography mb={1.4} className="text-dark" sx={{ fontWeight: "500" }}>
                        What is alpha art?
                    </Typography>
                    <p className="small desc mb" style={{ lineHeight: "1.3" }}>
                        Alpha art is the revolutionary NFT marketplace currently allowing users to buy/sell Solana based NFTs without any listing fees.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
