import * as React from 'react';
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Navbar from '../components/Navbar';

function HomePage() {
    return (
        <Container sx={{ height: '100vh',width:"100vw" }}>
            <Navbar/>
            <Box sx={{ height: "100%" }}>
                <Stack direction="row" flexWrap="wrap" sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Card sx={{ maxWidth: 250, m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "80px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <AccountBalanceWalletIcon sx={{ color: "#178F52", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Create Wallet
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Generate your own unique wallet now
                            </Typography>
                            <Button variant="outlined" color="success">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "80px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <PriceCheckIcon sx={{ color: "#0C618F", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent sx={{ justifyContent: "center" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Access Wallet
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Connect to the blockchain using the created wallet
                            </Typography>
                            <Button variant="outlined">
                                Access now
                            </Button>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Container>
    );
}

export default HomePage;