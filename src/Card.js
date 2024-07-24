import React from "react";
import { CardContent,Typography,Card,TextField} from "@mui/material";
import './Card.css';

const card = (
    <React.Fragment >
      <CardContent sx={{backgroundColor:'#2D2F38'}}> 
        <Typography sx={{ fontSize: 18 }}  color="orange" display='flex' flexDirection='column' gutterBottom>
          Login
          <TextField border='white' id="standard-basic" label="Username" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <br/>
          <button className="btnn">Login</button>
        </Typography>
       </CardContent>
    </React.Fragment>
  );
  export default function Cardcomponent() { 
  return (
    
    <Card sx={{minWidth: 'auto', textAlign:'center', border:'none'}}   variant="outlined" >{card}</Card>
 

  )
}
