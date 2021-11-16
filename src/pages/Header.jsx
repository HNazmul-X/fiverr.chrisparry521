import React from 'react';
import gridImages from "../images/512.webp"

const Header = () => {
    return (
        <header id="header">
            <div className="container-xxl">
                <div className="header-text">
                    <h1>A-Class Trading With Alpha Art</h1>
                    <p>Alpha art is the revolutionary NFT marketplace currently allowing users to buy/sell Solana based NFTs without any listing fees.</p>
                    <button className="theme-btn rounded px-5 mt-3">Explore Collection</button>
                </div>
            </div>

            <div id="images-grid">
                <div className="images-grid-container">
                    <div className="col col-1st">
                        <GridImageCard />
                        <GridImageCard />
                    </div>
                    <div className="col col-2nd">
                        <GridImageCard />
                        <GridImageCard />
                        <GridImageCard />
                    </div>
                    <div className="col col-3rd">
                        <GridImageCard />
                        <GridImageCard />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


export const GridImageCard = () => {
    return(

        <div className="grid-images-card">
            <img src={gridImages} alt="" />
        </div>
    )
}