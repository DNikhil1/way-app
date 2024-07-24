import { createTheme } from '@mui/material/styles';


const appFont = {
    fontFamily: 'Lato',
    color:'white'
};

export const AppTheme = createTheme({
    components:{
        MuiOutlinedInput:{
            
            styleOverrides:{
                   
                    'notchedOutline':{
                        borderColor:'#FFFFFF4D'
                    },
                   

            },
            
        },
        MuiFormControlLabel:{
            styleOverrides:{
                'root':{
                    color: 'black'
                },
                
                
            }
        },
        MuiTypography:{
            styleOverrides:{
                // 'root':{
                //     color:'#1F212B'
                // },
                'body1':{
                    color:'white'
                } 

            }
        },
        MuiDrawer:{
            styleOverrides:{
                'paper':{
                    backgroundColor:'#1F212B'
                }
            }
        },
        MuiInput:{
            styleOverrides:{
                'input':{
                    borderColor:'#FFFFFF4D'
                },
                 
            }
        },
        MuiDivider:{
            styleOverrides:{
                'root':{
                    borderColor: '#FFFFFF4D'
                }
            }
        },
        
        
    }   , 
    
    palette: {
        ochre: {
            main: 'black',
            light: 'white',
            dark: 'black',
            contrastText: 'black',
        },
        primary:{
         main:   '#CF8907',
         
        },
        text:{
            primary:'#ffffff',
            secondary:'#CF8907'
        },
    },

    typography: {
        h1: appFont,
        h2: appFont,
        h3: appFont,
        h4: appFont,
        h5: appFont,
        h6: appFont,
        subtitle1: appFont,
        subtitle2: appFont,
        body1: appFont,
        body2: appFont,
        caption: appFont
    },
});