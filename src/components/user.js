import { useEffect, useState } from "react";
import getUsersList from "../api/userService";
import * as React from 'react';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";


export default function UsersList() {

    const [users, setUsers] = useState([]);
    const [searchedByName, setSearchedByName] = useState("");
    const [searchedByEmail, setSearchedByEmail] = useState("");
    const history = useHistory();

    const getUsersListFromApi = async () => {
        const usersFromApi = await getUsersList();
        return usersFromApi;
    }

    const requestSearchByName = (searchedVal) => {
        const filteredRows = users.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setUsers(filteredRows);
    };
    const requestSearchByEmail = (searchedVal) => {
        const filteredRows = users.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setUsers(filteredRows);
    };
    const cancelSearchByName = () => {
        setSearchedByName("");
        requestSearchByName(searchedByName);
    };
    const cancelSearchByEmail = () => {
        setSearchedByName("");
        requestSearchByEmail(searchedByName);
    };
    const goToPost = ()=>{
        history.push('/posts');
    }
    useEffect(() => {
        async function fetchUsers() {
            const list = await getUsersListFromApi();
            await setUsers(list);
        };
        fetchUsers();
    }, []);


    return (
        <div>
            <SearchBar
                value={searchedByName}
                onChange={(searchVal) => requestSearchByName(searchVal)}
                onCancelSearch={() => cancelSearchByName()}
            /><br />
            <SearchBar
                value={searchedByEmail}
                onChange={(searchVal) => requestSearchByEmail(searchVal)}
                onCancelSearch={() => cancelSearchByEmail()}
            />
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Users</TableCell>
                            <TableCell align="right">name</TableCell>
                            <TableCell align="right">email&nbsp;(g)</TableCell>
                            <TableCell align="right">company name&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                options={{
                                    filtering: true
                                }}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={goToPost}>posts list</button>
        </div>
    )
}