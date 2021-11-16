import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <Box py={2}>
                <div className="container-xxl">
                    <Typography display="flex" justifyContent="space-between" >
                        <span> &copy; 2021 alpha.art </span>
                        <span> <span className="me-2">FAQ</span> <span>Privacy</span> </span>
                    </Typography>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;