//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 4}}>
                    Home
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 4}}>
                    Add a new toy
                    </Typography>
                    <Button color="inherit" sx={{ flexGrow: 2}}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}