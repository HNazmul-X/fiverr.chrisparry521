import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import leftImage from "../../images/fee-reduction-piggy-left.png";
import rightImage from "../../images/fee-reduction-right.png";

const ServiceFee = () => {
    return (
        <section id="service-fee">
            <Box position={"relative"} zIndex={1} className="service-fee__wrapper" bgcolor={blueGrey[50]}>
                <div className="container-xxl">
                    <Box className="service-fee__text" py={7}>
                        <Typography variant="h2" fontWeight="bold">
                            Lower the Servic 
                        </Typography>
                        <Typography fontSize={20} maxWidth={800} mt={3}>
                            Earn more on sales at alpha.art by owning Piggy Sol Gang NFT. Each piggy will reduce the service fee by 25%.
                        </Typography>
                        <button className="theme-btn rounded mt-3">Get your Piggy</button>
                    </Box>
                </div>
                <img className="service-fee_image left" src={leftImage} alt=""></img>
                <img className="service-fee_image right" src={rightImage} alt=""></img>
            </Box>
        </section>
    );
};

export default ServiceFee;
