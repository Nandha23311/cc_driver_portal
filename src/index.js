import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import HomeScreen from './HomeScreen'
let opensSans = { fontFamily: "OpenSans-Light" }
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626'
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        ...opensSans
      },
      input: {
        ...opensSans
      },
      formControl: { ...opensSans },
      adornedEnd: {}
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #262626',

        },
        '&:after': {
          borderBottom: '1px solid #262626',
        },
      },
      root: {
        ...opensSans
      },
      input: {
        ...opensSans
      }
    },
    MuiTextField: {
      root: {
        color: "#262626",
        fontFamily: "OpenSans-Light"
      }
    },
    MuiInputLabel: {
      root: {
        color: "#262626",
        fontFamily: "OpenSans-Light",
        "&$labelFocused": {
          color: "#000"
        }
      },
      labelFocused: {}
    },
  },

});

ReactDOM.render(
  <React.StrictMode>

    <MuiThemeProvider theme={theme}>
        <HomeScreen />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
