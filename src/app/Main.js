/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import { blue50 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classNames from 'classnames';

import MainAppBar from './MainAppBar';
import SideLeft from './SideLeft';
import SideRight from './SideRight';



const styles = {

  container: {
  },


};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue50,
  },
});

class Main extends Component {

  render() {

    return (

      <MuiThemeProvider muiTheme={muiTheme}>

        <div>
          
          {/*<MainAppBar />*/}

          <div className='row' style={styles.container}>

            <SideLeft />
            <SideRight />

          </div>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default Main;
