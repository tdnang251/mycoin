import * as React from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NavBarSignIn from '../components/NavbarSignIn';

function ShowStatisticsPage() {
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
                                            <TableCell align="right">From</TableCell>
                                            <TableCell align="right">To</TableCell>
                                            <TableCell align="center">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">

                                            </TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
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
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">

                                            </TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Container>
    );
}

export default ShowStatisticsPage;