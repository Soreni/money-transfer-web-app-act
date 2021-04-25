import React from 'react';
import useAxios from 'axios-hooks';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@material-ui/core';
import {API_URL} from './Config';


const ListAccount = ()=>{
    const [{ data, loading, error }] = useAxios(`${API_URL}/account/list`);
    if (loading === true) return <p><CircularProgress /></p>
    return (
        <div>
       
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>PIN</TableCell>
                        <TableCell>Balance</TableCell>
                        <TableCell>Is Verified?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.firstName}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phoneNumber}</TableCell>
                                <TableCell>{row.pin}</TableCell>
                                <TableCell>{row.balance}</TableCell>
                                <TableCell>{row.isVerified.toString()}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );


}


export default ListAccount ;