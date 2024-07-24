import "./App.css";
import Headings from "./Appbar";
import Cardcomponent from "./Card";
import { Box,  Grid } from "@mui/material";
import Footer from "./Components/Footer";

function App() {
  return (
    
     <Box bgcolor={'#333333'} height={"100vh"}>
      <Headings/>
      <Box sx={{bgcolor:'#1F212B',position:'absolute',width:1,display:'flex',alignItems:'center',justifyContent:'space-between',height:'700px'}}>
        <Grid container spacing={8} >
        <Grid item xs={8} >
          <h1>Generate Sidewalk Street maps using AI & ML</h1>
          <p>
            Generate sidewalks in an instant
            <br />
            Select regions of interest
            <br />
            Get sidewalk information for your applications
          </p>
        </Grid>
        <Grid item xs={4}>
          <Cardcomponent />
        </Grid>
      </Grid>
    
      </Box>

 <Footer/>
    </Box>
  
   
    
  );
}

export default App;


// <div>
//   <Box bgcolor={"black"}>
//     <Grid container spacing={8}>
//       <Grid item xs={4}>
//         <div>
//           <h1>Generate Siewalk Street maps using AI & ML</h1>
//           <p>
//             Generate sidewalks in an instant
//             <br />
//             <br />
//             Select regions of interest
//             <br />
//             <br />
//             Get sidewalk information for your applications
//           </p>
//         </div>
//       </Grid>
//       <Grid item xs={12}>
//         <Cardcomponent />
//       </Grid>
//     </Grid>
//   </Box>
// </div>;
