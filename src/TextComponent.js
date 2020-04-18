import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function App(props) {
    let style={fontFamily: "SofiaPro"}
    let className={}
    let onClick= ()=>{
      
    }
    if(props.style){
        style = {...style,...props.style}
    }
    if(props.className){
      className = {...className,...props.className}
  }
   if(props.onClick){
    onClick = props.onClick
  }
  
  const useStyles = makeStyles(theme => (className))
  const classes = useStyles()
  return (
    <Typography onClick={onClick} className={classes.css} style={style} >{props.text}</Typography>
  );
}

export default App;
