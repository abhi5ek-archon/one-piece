import { Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            setData(response.data)
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    return (
        <Stack style={{ margintop: 40 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NAme</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Phone no</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((i) => {
                            return (
                                <TableRow>
                                    <TableCell>{i.name}</TableCell>
                                    <TableCell>{i.email}</TableCell>
                                    <TableCell>{i.phone}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </Stack>


    )
}
export default Api 