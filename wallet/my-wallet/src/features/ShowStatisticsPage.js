import { useState, useEffect, useContext } from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';
import { SocketContext } from "../context/socket"

function ShowStatisticsPage() {
    const socket = useContext(SocketContext);
    const [listBlocks, setListBlocks] = useState([]);
    const [listTransactions, setListTransactions] = useState([]);

    useEffect(() => {
        socket.emit("get_all_blocks");
        socket.emit("get_all_transactions")
        socket.on("blocks", (data) => {
            console.log("Blocks: ", JSON.stringify(data["result"]))
            setListBlocks(data["result"].reverse());
        })
        socket.on("transactions", (data) => {
            console.log("Transactions: ", JSON.stringify(data["result"]))
            setListTransactions(data["result"].reverse());
        })
    }, [])

    const dateTimeReviver = (value) => {
        var d = new Date(value);
        var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes;

        formattedDate = formattedDate + " " + formattedTime;
        return formattedDate;
    }

    let lenBlocks = listBlocks.length;
    let lenTransactions = listTransactions.length;
    return (
        <Container sx={{ width: "100vw", mt: 10, ml: 0 }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5, ml: 0, width: "100%" }}>
                <Box sx={{ m: 0, width: "98vw", display: "flex", flexDirection: "row" }}>
                    <Box sx={{ width: "50%" }}>
                        <Typography sx={{ m: 2, ml: 2 }} variant='h5'>
                            Blocks:
                        </Typography>

                        <Box sx={{ p: 1 }}>

                            <TableContainer component={Paper} sx={{ width: "100%" }}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell align="right">Timestamp</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            listBlocks.map((block, index) => (
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        Block {(lenBlocks - index)}
                                                    </TableCell>
                                                    <TableCell align="right">{dateTimeReviver(block["timestamp"])}</TableCell>
                                                    <TableCell align="right"></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <Typography sx={{ m: 2, ml: 2 }} variant='h5'>
                            Transaction:
                        </Typography>

                        <Box sx={{ p: 1 }}>

                            <TableContainer component={Paper} sx={{ width: "100%" }}>
                                <Table sx={{ width: "100%" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell align="right">Timestamp</TableCell>
                                            <TableCell align="right">From</TableCell>
                                            <TableCell align="right">To</TableCell>
                                            <TableCell align="center">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            listTransactions.map((tran, index) => (
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {(lenTransactions - index)}
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
                </Box>


            </Box>
        </Container >
    );
}

export default ShowStatisticsPage;