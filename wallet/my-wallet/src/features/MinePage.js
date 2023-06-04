import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';

function MinePage() {
    return (
        <Container sx={{ m: 10, width: "100vw" }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5 }}>
                <Button variant="contained" sx={{ m: 2 }}>
                    Start mining
                </Button>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mr: 2 }}>
                    {/* status mining */}
                    <Typography variant="h5" sx={{ m: 2 }}>
                        status mining
                    </Typography>
                    {/* ming success */}
                    <Typography variant="h5" sx={{ ml: 2,color:"#0E8548",fontWeight:"bold" }}>
                        You are rewarded
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default MinePage;