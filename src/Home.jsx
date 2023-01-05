//MUI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function Home() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:3001/toys/')
                const json = await response.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
    fetchData()
    }, [deleting])

    async function handleDelete(e, toyId) {
        e.preventDefault()
        try {
            await fetch(`http://localhost:3001/toys/${toyId}`, {method: 'DELETE'})
            setDeleting(d => !d)
        } catch(error) {
            console.log('Deletion error: ', error)
            setDeleting(d => !d)
        }
    }

    return(
        <>
            <Typography variant="h2" align="center" sx={{ my: 5 }}>Santa's Magical World</Typography>
            <Typography variant="h3" align="center" sx={{ my: 5 }}>Toys List</Typography>
            {loading || error
                ? (
                    <p>Loading...</p>
                ) : (
                    <TableContainer component={Paper}>
                        <Table align="center" sx={{ minWidth: 650, maxWidth: 1250 }} aria-label="toys table">
                            <TableHead>
                                <TableRow>
                                        <StyledTableCell >Toy</StyledTableCell>
                                        <StyledTableCell>Description</StyledTableCell>
                                        <StyledTableCell>Price</StyledTableCell>
                                        <StyledTableCell>Category</StyledTableCell>
                                        <StyledTableCell>Delete</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.respDB.map(toy => (
                                    <StyledTableRow key={toy.id}>
                                        <StyledTableCell component="th" scope="row">
                                            <Link to={`/toys/${toy.id}`}>{toy.name}</Link>
                                        </StyledTableCell>
                                        <StyledTableCell>{toy.description}</StyledTableCell>
                                        <StyledTableCell>{toy.price}</StyledTableCell>
                                        <StyledTableCell>{toy.category}</StyledTableCell>
                                        <StyledTableCell>
                                            <Button onClick={(e) => handleDelete(e, toy.id)}>
                                                <DeleteOutlineIcon color="inherit" />
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
        </>
    )
}