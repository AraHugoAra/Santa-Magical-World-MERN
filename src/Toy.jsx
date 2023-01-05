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
import { useParams } from 'react-router-dom'

import useFetch from './hooks/useFetch'

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

export default function Toy() {
    let { toyId } = useParams()
    const { data, error, loading } = useFetch(`http://localhost:3001/toys/${toyId}`)

    return(
        <>
            <Typography align="center" variant="h1">Santa's Magical World</Typography>
            {loading || error ? (
                <p>Loading</p>
            ) : (
                <>
                    <Typography align="center" variant="h2">
                        {data.respDB[0].name}'s details
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table align="center" sx={{ minWidth: 650, maxWidth: 1250 }} aria-label="toys table">
                            <TableHead>
                                <TableRow>
                                        <StyledTableCell>Description</StyledTableCell>
                                        <StyledTableCell>Price</StyledTableCell>
                                        <StyledTableCell>Category</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.respDB.map(toy => (
                                    <StyledTableRow key={toy.id}>
                                        <StyledTableCell>{toy.description}</StyledTableCell>
                                        <StyledTableCell>{toy.price}</StyledTableCell>
                                        <StyledTableCell>{!toy.category ? "n/a" : toy.category}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )
            }
        </>
    )
}