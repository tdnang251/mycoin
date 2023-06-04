import * as React from 'react';
import { Box, Card, CardContent, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import NavBarSignIn from '../components/NavbarSignIn';

function DashboardPage() {
    return (
        <Container sx={{ width: "100vw", mt: 10 }}>
            <NavBarSignIn />
            <Box sx={{ mt: 5 }}>
                <Stack direction="row" flexWrap="wrap" sx={{ justifyContent: "center", height: "100%", width: "100%" }}>
                    <Card sx={{ width: "30%", m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "150px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <HomeTwoToneIcon sx={{ color: "#178F52", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Address:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                public address
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "30%", m: 2, bgcolor: "#EDF2F2" }}>
                        <Box sx={{ height: "150px", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <AccountBalanceTwoToneIcon sx={{ color: "#0C618F", height: "100%", width: "100%" }} />
                        </Box>
                        <CardContent sx={{ justifyContent: "center" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Balance:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                balance Coin
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>

                <Typography sx={{ m: 2, ml: 20 }} variant='h5'>
                    My transaction:
                </Typography>

                <Box sx={{ ml: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <TableContainer component={Paper} sx={{ width: "80%" }}>
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
        </Container>
    );
}

export default DashboardPage;