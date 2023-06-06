import { useState, useEffect, useContext } from 'react';
import { Box, Card, CardContent, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import NavBarSignIn from '../components/NavbarSignIn';
import { SocketContext } from '../context/socket'

function DashboardPage() {
    const socket = useContext(SocketContext);
    const [amount, setAmount] = useState();
    const [loaded, setLoaded] = useState(false);
    const [listTransactions, setListTransactions] = useState([]);

    useEffect(() => {
        if (!loaded) {
            socket.emit("log_connect")
            fetch("http://localhost:3001/syncdata")
                .then(
                    res => res.json())
                .then(
                    (result) => {
                        localStorage.setItem("data", result.result);
                        socket.emit("local_data", result.result);
                        setLoaded(true);
                    },
                    (error) => {
                        console.log(error)
                    })
        }
        else {
            socket.emit("getAmount", { socketId: socket.id, address: localStorage.getItem("address") })
            console.log(socket.id)
            socket.on("getAmount", (data) => {
                setAmount(data);
                localStorage.setItem("balance", data);
                console.log(`Amount: ${data}`);
            })
            socket.emit("get_my_transactions", localStorage.getItem("address"))
            socket.on("transactions", (data) => {
                console.log("Transactions: ", JSON.stringify(data["result"]))
                setListTransactions(data["result"].reverse());
            })
        }
    },[loaded])

    const dateTimeReviver = (value) => {
        var d = new Date(value);
        var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes;

        formattedDate = formattedDate + " " + formattedTime;
        return formattedDate;
    }

    let lenTransactions = listTransactions.length;
    return (
        <Container sx={{ width: "100vw", mt: 10 }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5 }}>
                <Stack direction="row" flexWrap="wrap" sx={{ justifyContent: "center", height: "100%", width: "100%" }}>
                    <Card sx={{ width: "45%", m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "150px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <HomeTwoToneIcon sx={{ color: "#178F52", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Address:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
                                {localStorage.getItem("address")}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "45%", m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "150px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <AccountBalanceTwoToneIcon sx={{ color: "#0C618F", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent sx={{ justifyContent: "center" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Balance:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {amount} Coin
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>

                <Typography sx={{ m: 2, ml: 20 }} variant='h5'>
                    My transaction:
                </Typography>

                <Box sx={{ ml: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

                    <TableContainer component={Paper} sx={{ width: "90%" }}>
                        <Table sx={{ width: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >#</TableCell>
                                    <TableCell align="right">Timestamp</TableCell>
                                    <TableCell align="right">From</TableCell>
                                    <TableCell align="right">To</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    listTransactions.map((tran,index) => (
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {(lenTransactions-index)}
                                            </TableCell>
                                            <TableCell align="right">{dateTimeReviver(tran["timestamp"])}</TableCell>
                                            <TableCell align="right">{tran["fromAddress"] === null ? "Server" : tran["fromAddress"].substring(0, 10) + "..."}</TableCell>
                                            <TableCell align="right">{tran["toAddress"].substring(0, 10) + "..."}</TableCell>
                                            <TableCell align="center">{tran["amount"]}</TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container >
    );
}

export default DashboardPage;