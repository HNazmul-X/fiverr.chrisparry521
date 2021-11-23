import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import IMG from "../../images/512.webp"
import {useNavigate} from "react-router-dom"

const NewCollection = () => {
    return (
        <section className="mt-4" id="new-collection">
            <div className="container-xxl">
                <Box py={4}>
                    <Typography fontWeight={700} mb="20px" variant="h4">
                        {" "}
                        New Collection
                    </Typography>
                    <Box display="flex" sx={{ flexWrap: "nowrap", overflowX: "scroll" }} width={"100%"} p={4} pl={0} borderRadius={1} mb={2}>
                        {[...new Array(10)].map(() => (
                            <NewCollectionCard />
                        ))}
                    </Box>
                </Box>
            </div>
        </section>
    );
};

export default NewCollection;

export const NewCollectionCard = () => {
    const navigate = useNavigate()
    return (
        <Box
            onClick={() => {
                navigate("/page2");
                window.scroll({ top: 0 });
            }}
            display="inline-block"
            mx={2}>
            <Card elevation={0} style={{ background: "transparent", width: "256px" }}>
                <CardActionArea>
                    <CardMedia component="img" image={IMG} height="256px" sx={{ borderRadius: "5px" }} />
                    <Typography marginTop={2} align="center" variant="h5">
                        Scogies
                    </Typography>
                    <Typography align="center"> 6969 items</Typography>
                </CardActionArea>
            </Card>
        </Box>
    );
}