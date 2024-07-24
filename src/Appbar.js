import { AppBar,Toolbar,Container,Typography} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../src/images/image.png';
import Box from "@mui/material/Box";

const Headings=()=> {
    return (
        <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:'black'}}>
        <Toolbar disableGutters>
          <Box sx={{marginRight:'10px'}}>
          <img height='30px' src={logo} alt='logo'/>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 300,
              letterSpacing: '.1rem',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            Waylytyx App
          </Typography>
          </Toolbar>
          </Container>
          </AppBar>
    )
}
export default Headings;