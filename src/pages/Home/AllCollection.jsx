import { InlineIcon } from '@iconify/react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../../images/512.webp"

const AllCollection = () => {
    return (
        <section id="all-collection">
            <Box className={"container-xxl"} py={10}>
                <Typography fontWeight={"bold"} variant={"h5"}>
                    All Collection
                </Typography>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5">
                    {[...new Array(32)].map(() => (
                        <div className="col pb-4">
                            <AllCollectionCard></AllCollectionCard>
                        </div>
                    ))}
                </div>
            </Box>
        </section>
    );
};

export default AllCollection;


export const AllCollectionCard = () => {
    const navigate = useNavigate()
    
    return (
        <Card onClick={()=> {
            navigate("/page2");
            window.scroll({top:0})
        } } elevation={0} sx={{ width: "100%", background: "transparent" }}>
            <CardActionArea>
                <CardMedia height={"286px"} sx={{ borderRadius: 3 }} image={IMG} component="img"></CardMedia>
                <CardContent style={{ padding: 5 }}>
                    <Typography mt={1}>Dagan Ape Academy</Typography>
                    <Typography display="flex" fontSize={14} alignItems="center">
                        {" "}
                        <span className="fw-bolder text-dark  d-flex justify-content-center align-items-center me-2">
                            {" "}
                            <InlineIcon className="me-1" fontSize={20} icon="akar-icons:eye"></InlineIcon> <span className="mb-1" >20k views</span>
                        </span>{" "}
                        <span className="mb-1">total volume</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
} 