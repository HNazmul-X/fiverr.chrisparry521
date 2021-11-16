import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import IMG from "../images/512.webp"

const NewCollection = () => {
    return (
        <section className="mt-4" id="new-collection">
            <div className="container-xxl">
                <Typography fontWeight={700} mb="20px" variant="h4">
                    {" "}
                    New Collection
                </Typography>
                <Box display="flex" sx={{ flexWrap: "nowrap", overflowX: "scroll" }} width={"100%"} p={4} pl={0} borderRadius={1} mb={2}>
                    {[...new Array(10)].map(() => (
                        <NewCollectionCard />
                    ))}
                </Box>
            </div>
        </section>
    );
};

export default NewCollection;

export const NewCollectionCard = () => {
    return (
        <Box display="inline-block" mx={2}>
            <Card elevation={0} style={{background:"transparent",width:"256px"}} >
                <CardActionArea>
                    <CardMedia component="img" image={IMG} height="256px" sx={{borderRadius:"5px"}} />
                    <Typography marginTop={2} align="center" variant="h5">Scogies</Typography>
                    <Typography align="center"> 6969 items</Typography>
                </CardActionArea>
            </Card>
        </Box>
    );
}