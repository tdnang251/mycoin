import { useState, useEffect, useContext } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';
import { SocketContext } from '../context/socket'

function MinePage() {
    const socket = useContext(SocketContext);
    const [buttonState, setButtonState] = useState(false);
    const [showState, setShowState] = useState(false);
    const [stateContent, setStateContent] = useState("Mining...")
    const [reward, setReward] = useState();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleMining = () => {
        setStateContent("Mining...");
        setButtonState(true);
        setShowSuccess(false);
        setShowState(true);
        const data = { address: localStorage.getItem("address"), socket_id: socket.id }
        socket.emit("mine", data);
    }

    useEffect(() => {
        socket.on("mine_success", (data) => {
            setStateContent("Mining successfully");
            setShowSuccess(true);
            setButtonState(false);
            setReward(data);
        })
    }, [])

    return (
        <Container sx={{ m: 10, width: "100vw" }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5 }}>
                <Button variant="contained" sx={{ m: 2 }} disabled={buttonState} onClick={handleMining}>
                    Start mining
                </Button>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mr: 2 }}>
                    {/* status mining */}
                    {showState && (
                        <Typography variant="h5" sx={{ m: 2 }}>
                            {stateContent}
                        </Typography>
                    )
                    }
                    {/* ming success */}
                    {showSuccess && (
                        <Typography variant="h5" sx={{ ml: 2, color: "#0E8548", fontWeight: "bold" }}>
                            Congratualtion!! You are rewarded {reward} for mining new block!
                        </Typography>
                    )
                    }
                </Box>
            </Box>
        </Container>
    );
}

export default MinePage;