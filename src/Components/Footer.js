import {
    Box
} from "@mui/material";
import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import Container from "@mui/material/Container";

const Footer = () => {
    return (
        <Box component='footer' sx={{bgcolor:'black', width:'100%', textAlign:'center',bottom:0, position:'absolute'}}>
        <Container sx={{padding:'10px'}}>
          <Typography color={'orange'}>Guassian Solutions</Typography>
          <Typography color={'white'}>Inside Sidewalk</Typography>
        </Container>
        
        
      </Box>
    )
}   
export default Footer;