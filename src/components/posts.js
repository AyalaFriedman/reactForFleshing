import { useState, useEffect } from 'react';
import getPostsList from '../api/postService';
import SimpleDialog from './dialog';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Posts() {

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const list = await getPostsList();
            await setPostsList(list);
        };
        fetchPosts();
    }, [])

    const openDialog = () => {
        return <SimpleDialog />
    }

    return (
        <div>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>posts</TableCell>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">userId&nbsp;</TableCell>
                            <TableCell align="right">title&nbsp;</TableCell>
                            <TableCell align="right">body&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postsList.map((row) => (
                            <TableRow
                                options={{
                                    filtering: true
                                }}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.userId}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={openDialog} />
        </div>
    )
}