import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { SocketContext } from '../context/socket'


function NavBarSignIn() {
    const pages = ['Dashboard', 'Send', 'Blocks and Transactions', 'Mine'];
    const links=['dashboard','sendcoin','showshatistics','mine']
    const history = useNavigate()

    const socket = useContext(SocketContext);

    const handleLogout = () => {
        console.log("Click on log out")
        localStorage.clear();
        history("/")
        socket.emit("log_disconnect")
    };

    return (
        <AppBar component="nav">
            <Toolbar sx={{ bgcolor: '#6bc3db' }} disableGutters>
                <MonetizationOnIcon sx={{ ml: 2 }} />
                <Typography sx={{ mr: 10 }}>
                    My Wallet
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page,index) => (
                        <Link key={page} to={`/${links[index]}`}>
                            <Button

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        </Link>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip>
                        <IconButton sx={{ mr: 5, p: 0, height: "60px", width: "60px" }} onClick={handleLogout}>
                            <ArrowCircleLeftIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default NavBarSignIn;