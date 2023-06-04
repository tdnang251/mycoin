import * as React from 'react';
import Navbar from '../components/Navbar';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function ConnectWalletPage() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Navbar />
            <Box sx={{ height: "100%",display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card sx={{ width: "450px", m: 2, bgcolor: "#EDF2F2" }}>
                    <Box sx={{ height: "200px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <PriceCheckIcon sx={{ color: "#0C618F", height: "100%", width: "100%" }} />
                    </Box>
                    <CardContent sx={{ justifyContent: "center" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Private Key
                        </Typography>
                        <Input size="md" placeholder="Enter your private key" />
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="error.main">
                            A private key is a 256-bit number in hexadecimal
                        </Typography>
                        <Button variant="solid">
                            Access now
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default ConnectWalletPage;