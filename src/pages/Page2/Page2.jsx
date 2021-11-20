import React from 'react';
import header_img from "../../images/page-2-header.jpg"
import mock_image from "../../images/196.webp"
import SitebarCollpase from '../../components/SitebarCollpase/SitebarCollpase';
import { InlineIcon } from '@iconify/react';

const Page2 = () => {
    return (
        <div id="page2">
            <section className="dape-header">
                <img src={header_img} alt="not fount" />
            </section>
            <section className="personal">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className="empty-box"></div>
                        <div className="profile-img">
                            <img src={mock_image} alt="" />
                        </div>
                        <div className="icon-boxes">
                            <div className="box-1">
                                <button className="d-flex justify-content-center align-items-center">
                                    <InlineIcon className="fs-5 me-2" icon="ph:trend-up-bold" /> Activity
                                </button>
                                <button className="icon">
                                    <InlineIcon className="fs-5" icon="clarity:edit-solid"/>
                                </button>
                            </div>
                            <div className="box-2"></div>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            <h2>Degen Ape Academy</h2>
                        </div>
                        <div className="white-boxes">
                            {[...new Array(4)].map(() => (
                                <div className="box">
                                    <div className="number">
                                        <dd>10K</dd>
                                    </div>
                                    <span>items</span>
                                </div>
                            ))}
                        </div>
                        <div className="little-description">
                            <p>
                                Deep in the heart of Dingus Forest echoes the sleepless cries of a troop of 10,000 <br /> apes. These aren’t just regular apes, however. These are degenerate apes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <div className="container-fluid">
                    <div className="contents">
                        <div className="sidebar">
                            <div className="accordion" id="accordionExample">
                                {[...new Array(7)].map((item, index) => (
                                    <SitebarCollpase key={index} collapseKey={index} label={`item-${index}`} activeCount={index === 0 ? "1" : ""}>
                                        <div className="accordion-body">
                                            <div className="the-line">
                                                <input defaultChecked={index === 0 && true} type="checkbox" />
                                                <span>Buy Now</span>
                                            </div>
                                            <div className="the-line">
                                                <input type="checkbox" />
                                                <span>Buy Now</span>
                                            </div>
                                        </div>
                                    </SitebarCollpase>
                                ))}
                            </div>
                        </div>

                        <div className="main-bar">
                            <div className="search-bar">
                                <div className="side">
                                    <div className="icon">
                                        <InlineIcon icon="eva:sync-fill" />
                                    </div>
                                    <div className="filter">
                                        <span>FILTER</span>
                                    </div>
                                </div>

                                <div className="side">
                                    <div className="icon search-icon">
                                        <InlineIcon icon="bi:search" />
                                    </div>
                                    <div className="drop-down">Price: Low Price</div>
                                </div>
                            </div>
                            <div className="total-items mt-3 mb-1">
                                <span>112 Items</span>
                            </div>
                            <div className="image-container">
                                {[...new Array(40)].map((c, i) => (
                                    <div key={i} className="image-box">
                                        <div className="img">
                                            <img src={mock_image} alt="" />
                                        </div>
                                        <div className="text-line">
                                            <div className="line">
                                                <div className="name">
                                                    <span>Degen Ape</span>
                                                </div>
                                                <div className="id">
                                                    <span>#6247</span>
                                                </div>
                                            </div>
                                            <div className="line-ender">◎50</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page2;