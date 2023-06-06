import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

function ConnectWalletPage() {

    const [privateKey, setPrivateKey] = useState();
    const [alert, setAlert] = useState("A private key is a 256-bit number in hexadecimal");
    const history = useNavigate();

    const checkValidPrivate = () => {
        var re = /[0-9A-Fa-f]{6}/g;
        if (re.test(privateKey) && privateKey.length === 64) {
            return true;
        }
        return false;
    }

    const handleClick = async () => {
        if (checkValidPrivate()) {
            const myKey = ec.keyFromPrivate(privateKey);
            const myWalletAddress = myKey.getPublic('hex');
            await localStorage.setItem("privateKey", privateKey);
            await localStorage.setItem("address", myWalletAddress);
            history("/dashboard");
        }
        else {
            setAlert("Private key not valid")
        }
    }

    const handleChange=(e)=>{
        setPrivateKey(e.target.value)
    }

    return (
        <Container sx={{ height: '100vh' }}>
            <Navbar />
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card sx={{ width: "800px", m: 2, bgcolor: "#EDF2F2" }}>
                    <Box sx={{ height: "200px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <PriceCheckIcon sx={{ color: "#0C618F", height: "100%", width: "100%" }} />
                    </Box>
                    <CardContent sx={{ justifyContent: "center" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Private Key
                        </Typography>
                        <Input size="md" placeholder="Enter your private key" onChange={handleChange}/>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="error.main">
                            {alert}
                        </Typography>
                        <Button variant="solid" onClick={handleClick}>
                            Access now
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default ConnectWalletPage;