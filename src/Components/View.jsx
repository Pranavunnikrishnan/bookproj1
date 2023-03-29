import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addbook from './Addbook'

const View = () => {
    var [students, SetStudents] = useState([])
    var [selected, setSelected] = useState({})
    var [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get("  http://localhost:3000/students")
            .then(response => {
                SetStudents(students = response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const updateValue = (value) => {
        setSelected(value);
        setUpdate(true);
    }



    const deleteValues = (id) => {
        axios.delete("http://localhost:3000/students/" + id)
            .then(response => {
                alert('sucessfully deleted');
                window.location.reload(false);
            })
            .catch(err => console.log(err))
    }

    var finalJSX = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>BookName</TableCell>
                    <TableCell>published</TableCell>
                    <TableCell>genre</TableCell>
                    <TableCell>price</TableCell>
                    

                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.BookName}</TableCell>
                        <TableCell>{value.published}</TableCell>
                        <TableCell>{value.genre}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <TableCell><Button variant='contained' color='success' onClick={() => updateValue(value)}>update</Button></TableCell>
                        <TableCell><Button variant='contained' color="error" onClick={() => deleteValues(value.id)}>delete</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

    if (update) {
        finalJSX = <Addbook data={selected} method="put" />

    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            {finalJSX}

        </div>
    )
}

export default View