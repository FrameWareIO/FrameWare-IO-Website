/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {cyanA400} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import MainAppBar from './MainAppBar';

const styles = {
  
  header: {
    textAlign: 'center',
  },
  
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: cyanA400,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    
  

    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
         
        <div style={styles.header}>
          
        <MainAppBar />
        
        
        
        <div style={styles.container}>
        
          
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          
          <img src={require('/framewareio.png')} />
          
          <h1>Launching soon</h1>
          <h2>Stay updated by subscribing to our mailing list</h2>
          
          <TextField hintText="Hint Text" />
    
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
        
         </div>
         
      </MuiThemeProvider>
    );
  }
}

export default Main;
