import { useState } from 'react';
import { Box, Button, Container, FormControl, Modal, TextField, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

function SendCoinPage() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container sx={{ mt: 10,width: "100vw" }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5, height: "100vh", width: "100%" }}>
                <Typography sx={{ m: 2 }} variant='h4' textAlign={"center"}>
                    Create a new transaction
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} component="form" noValidate autoComplete="off">
                    <FormControl sx={{ width: '500px' }}>
                        <TextField
                            sx={{ m: 1 }}
                            required
                            id="toAddress"
                            label="To Address"
                            name="toAddress"
                        />
                        <TextField
                            sx={{ m: 1 }}
                            required
                            id="amount"
                            label="Amount"
                            name="amount"
                        />
                    </FormControl>
                    <Button variant="contained" onClick={handleOpen}>
                        Create
                    </Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                Sign transaction
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Please confirm if you want to sign this transaction
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", m:1}}>
                                <Button variant='contained' color="error" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant='contained' color="success">
                                    Confirm
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Container>
    );
}

export default SendCoinPage;