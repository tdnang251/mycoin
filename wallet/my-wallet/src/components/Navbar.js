import { AppBar, Toolbar, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Navbar() {
    return (
        <AppBar component="nav" >
            <Toolbar sx={{ bgcolor: '#6bc3db' }} disableGutters>
                <MonetizationOnIcon sx={{ ml: 2 }} />
                <Typography>
                    My Wallet
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;