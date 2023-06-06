import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormControl, Modal, TextField, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';
import { SocketContext } from '../context/socket'


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
    const socket = useContext(SocketContext);
    const history = useNavigate();
    const [toAddress, setToAddress] = useState("");
    const [amount, setAmount] = useState(0);
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("")


    const checkValidForm = () => {
        if ((toAddress !== "") && (amount !== "") && (parseInt(amount) <= localStorage.getItem("balance"))) {
            console.log("Form valid")
            return true;
        }
        else {
            if (toAddress === "") {
                setAlertContent("To address field empty");
            }
            else {
                if (amount === "") {
                    setAlertContent("Amount field empty");
                }
                else {
                    setAlertContent("Balance not enough");
                }
            }
        }
        console.log("Form not valid")
        return false;
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const createClick = () => {
        if (checkValidForm()) {
            handleOpen()
        }
        else {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    }

    const handleConfirm = () => {
        setOpen(false);
        const data = { "fromAddress": localStorage.getItem("address"), "toAddress": toAddress, "amount": amount, "privateKey": localStorage.getItem("privateKey") }
        socket.emit("add_PT", data);
        setAlertContent("Add transaction into pending transaction successfully");
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1000);
        setTimeout(() => {
            history("/mine");
        }, 1100);
    }

    const handleChangeToAddress = (e) => {
        e.preventDefault()
        setToAddress(e.target.value)
    }

    const handleChangeAmount = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
    }

    return (
        <Container sx={{ mt: 10, width: "100vw" }}>
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
                            onChange={handleChangeToAddress}
                        />
                        <TextField
                            sx={{ m: 1 }}
                            required
                            id="amount"
                            label="Amount"
                            name="amount"
                            type="number"
                            onChange={handleChangeAmount}
                        />
                    </FormControl>
                    <Button variant="contained" onClick={createClick}>
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
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", m: 1 }}>
                                <Button variant='contained' color="error" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant='contained' color="success" onClick={handleConfirm}>
                                    Confirm
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                    {alert && <Typography variant='h5' sx={{ color: 'warning.main' }}>{alertContent}</Typography>}
                </Box>
            </Box>
        </Container>
    );
}

export default SendCoinPage;