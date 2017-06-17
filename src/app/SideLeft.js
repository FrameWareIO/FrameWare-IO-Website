import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames';


const styles = {
    
 container: {
    textAlign: 'center',
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: '#FFFFFF'
  },
  
   logo: {
    height: 200,
    width: 200,
  },
  
}


class SideLeft extends Component {
    
    render() {
        return (
          <div className='col-md-6' style={styles.container}>

            <span><img src={require('../../assets/frameware.png')}
              style={styles.logo} /></span>

          </div>
        )
    }
}
  
export default SideLeft;