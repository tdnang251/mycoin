import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function NavBarSignIn() {
    const pages = ['Dashboard', 'Send', 'Blocks and Transactions', 'Mine'];

    return (
        <AppBar position="static">
            <Toolbar sx={{ bgcolor: '#6bc3db' }} disableGutters>
                <MonetizationOnIcon sx={{ ml: 2 }} />
                <Typography sx={{mr:10}}>
                    My Wallet
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip>
                        <IconButton sx={{ mr: 5, p: 0, height: "60px", width: "60px" }}>
                            <ArrowCircleLeftIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default NavBarSignIn;