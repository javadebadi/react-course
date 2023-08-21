
import React from 'react';
import { Container } from "@mui/material";
import { Box } from '@mui/material';

const TestContainers = () => {
    return (
        <div>
            <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
            </Container>
        </div>
    )
}

export default TestContainers;
