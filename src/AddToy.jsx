//MUI
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import useFetch from './hooks/useFetch'

export default function AddToy() {
    const { data, error, loading } = useFetch('http://localhost:3001/categories')
    const [nameInput, setNameInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [catSelect, setCatSelect] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [inputId, setInputId] = useState(9)


    function handleCatChange(e) {
        setCatSelect(e.target.value)
    }
    function handleNameInput(e) {
        setNameInput(e.target.value)
    }
    function handleDescInput(e) {
        setDescInput(e.target.value)
    }
    function handlePriceInput(e) {
        setPriceInput(e.target.value)
    }

    const postToy = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch('http://localhost:3001/toys/', requestOptions)
            const data = await response.json()
            console.log('Success ', data)
            window.location = "/"
        } catch(error) {
            console.log('Error ', error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        //Create body by gathering inputs
        const bodyData = {
            name: nameInput,
            description: descInput,
            category: catSelect,
            price: priceInput,
            id: inputId
        }
        //Check and post data
        nameInput && descInput && catSelect && !isNaN(bodyData.price)
        ? postToy(bodyData) && setInputId(id => id += 1) && e.target.reset()
        : alert('Incorrect request')
    }

    return(
        <form action="/" onSubmit={(e) => handleSubmit(e)}>
            <Typography variant="h2" align="center" sx={{ my: 5 }}>Santa's Magical World</Typography>
            <Typography variant="h3" align="center" sx={{ my: 5 }}>Add a New Toy</Typography>
            {loading || error ? (
                <p>Loading...</p>
            ) : (
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-evenly", my: 3}}>
                <FormControl>
                    <InputLabel htmlFor="nameInput">Name</InputLabel>
                    <Input id="nameInput" aria-describedby="new-toy-name-input" onChange={(e) => handleNameInput(e)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="descriptionInput">Description</InputLabel>
                    <Input id="descriptionInput" aria-describedby="new-toy-description-input" onChange={(e) => handleDescInput(e)} />
                </FormControl>
                <FormControl sx={{ minWidth: 140 }}>
                    <InputLabel id="category_input">Category</InputLabel>
                    <Select
                        labelId="category_input"
                        id="category_input"
                        value={catSelect}
                        label="Category"
                        onChange={(e) => handleCatChange(e)}
                    >
                        {data.respDB.map(category =>
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="priceInput">Price</InputLabel>
                    <Input id="priceInput" aria-describedby="new-toy-price-input" onChange={(e) => handlePriceInput(e)} />
                </FormControl>
                <Button 
                    variant="outlined"
                    size="large"
                    color="inherit"
                    type="submit"
                >
                    Add New Toy
                </Button>
            </Container>
            )}
        </form>
    )
}