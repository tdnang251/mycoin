import * as React from 'react';
import Navbar from '../components/Navbar';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Button from '@mui/joy/Button';

function CreateWalletPage() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Navbar />
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card sx={{ width: "450px", m: 2, bgcolor: "#EDF2F2" }}>
                    <Box sx={{ height: "200px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <AccountBalanceWalletIcon sx={{ color: "#178F52", height: "100%", width: "100%" }} />
                    </Box>
                    <CardContent sx={{ justifyContent: "center" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Private Key
                        </Typography>
                        <Typography sx={{ mt: 2, ml: 1, mb: 2 }} variant="h6">
                            private key
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="error.main">
                            Remember this key carefully. If you forget your private key, you will lost your wallet
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

export default CreateWalletPage;