import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PinInput from "react-pin-input";


import './index.css';

//services
import { login } from '../../../services/atm/authentication-service';
import { navigate } from '../../../services/router/routerHistory-service';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  //const classes= useStyles();
  
export default class Home extends Component {    

      onChange = value => {
        if (value.length === 4) {      
          login(value).then(data => {
            if (typeof data ==='number') {
              
              debugger;
              this.props.navigate("../account");

            //   this.props.history.push(
            //       {
            //           pathname:'../account'
            //       }
            //   );
            } else {  
                
                this.props.navigate("../account", {state: {error: data}});
            //   this.props.history.push(
            //     {
            //       pathname:'/account',
            //       state: {error: data}
            //     }
            //   )
            }
          });
        }
      };
    
      onClear = () => {        
        this.pin.clear();
      };
      
    render() {
        return (

            
         
                 
                
            <Grid container component="main" justify="center" >
            <Grid>
            
                 <Typography component="h1" variant="h5">
          Sign in
        </Typography>
            <p>Please enter your pin code to begin</p>
            </Grid>
            <Grid>
             <PinInput
                length={4}
                focus
                secret 
                ref={p => (this.pin = p)} 
                inputStyle={{borderColor: 'silver'}}
                inputFocusStyle={{borderColor: 'black'}}
                type="numeric"
                onChange={this.onChange}
               
                
            />
        
            
            </Grid>
            <Grid>
          <br></br>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={'submitbutton'}
              onClick={this.onClear}
              text="clear"
            >Clear</Button>
    </Grid>
        </Grid>
      
    );
}
}