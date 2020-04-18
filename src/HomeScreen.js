import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextComponent from './TextComponent'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [RouteId, setRouteId] = React.useState("")
    const [driverName, setDriverName] = React.useState("")
    const [driverPhNumber, setDriverPhNumber] = React.useState("")
    const [driverPhoto,setDriverPhoto] =React.useState(null)
    const [adhaarCard,setAdhaarCard] =React.useState(null)
    const [status,setStatus] = React.useState(null)
    async function setAdhaar(e){
        console.log("E ",e)
        setAdhaarCard(e.target.files[0])
        console.log("E Target ",e.target.files[0])
    }
    async function uploadToServer(){
        try{
            let formData = new FormData()
            formData.set("routeId",RouteId)
            formData.set("drivername",driverName)
            formData.set("driverPhNumber",driverPhNumber)
            formData.append("DriverPhoto",adhaarCard)
            formData.append("AdhaarCard",adhaarCard)

            axios({
                method: 'post',
                url: "https://ccmailer.herokuapp.com/upload",
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        }catch(error){
            console.log("Error ",error)
        }
        
    }
      
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar >
                    <TextComponent style={{ textAlign: "center" }} text="Driver Portal" />
                </Toolbar>
            </AppBar>
            <Grid container xs={12} spacing={2} justify="center">
                <Grid item xs={10} >
                    <TextField fullWidth id="standard-basic" style={{ marginTop: 10 }}
                        label="Enter car route id"
                        value={RouteId}
                        onChange={(e) => setRouteId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} >
                    <TextField fullWidth id="standard-basic" style={{ marginTop: 10 }}
                        label="Enter driver name"
                        value={driverName}
                        onChange={(e) => setDriverName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} >
                    <TextField fullWidth id="standard-basic" style={{ marginTop: 10 }}
                        label="Enter driver phone number"
                        value={driverPhNumber}
                        onChange={(e) => setDriverPhNumber(e.target.value)}
                    />
                </Grid>

                <Grid item container xs={10} style={{marginTop:"10px"}}>
                    <Grid item xs={6} style={{marginTop:"3px"}}>
                        <TextComponent text="Upload driver photo" />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            component="label"
                            style={{ fontFamily:"SofiaPro",fontSize:"10px" }}
                        >
                            Upload File
                        <input
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e)=>setDriverPhoto(e)}
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={2} style={{marginTop:"7px"}}>
                        <TextComponent text={driverPhoto? "ok" : null} />
                    </Grid>

                </Grid>

                <Grid item container xs={10} style={{marginTop:"10px"}}>
                    <Grid item xs={6} style={{marginTop:"3px"}}>
                        <TextComponent text="Upload adhar card" />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            component="label"
                            style={{ fontFamily:"SofiaPro",fontSize:"10px" }}
                        >
                            Upload File
                        <input
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e)=>setAdhaar(e)}
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={2} style={{marginTop:"7px"}}>
                        <TextComponent text={adhaarCard? "ok" : null} />
                    </Grid>

                </Grid>

                <Grid item container xs={10} style={{marginTop:"10px"}}>
                   
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            component="label"
                            style={{ fontFamily:"SofiaPro",fontSize:"10px" }}
                            onClick={uploadToServer}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={2} style={{marginTop:"7px"}}>
                        <TextComponent text={status} />
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}