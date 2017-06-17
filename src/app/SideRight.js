import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classnames';



const styles = {

    container: {
        textAlign: 'center',
        paddingTop: 200,
        paddingBottom: 200,
        backgroundColor: '#2AACEA',
        color: '#FFFFFF'
    },


    underlineStyle: {
        borderColor: '#FFFFFF',
    },

    floatingLabelFocusStyle: {
        color: '#FFFFFF',
    },

    subscribeButton: {
        margin: 12,
    }

}


class SideLeft extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: null,
        };
    }


    handleSubscribe = () => {
        this.setState({
            email: this.refs.emailField.getValue(),
        });
    }

    render() {
        return (
            <div className='col-md-6' style={styles.container}>

                <h1>Stay tuned</h1>
                <h2>We're launching soon.</h2>

                <TextField
                    floatingLabelText="Email Address"
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    ref="emailField"
                />

                <RaisedButton
                    secondary={true}
                    onTouchTap={this.handleSubscribe}
                    style={styles.subscribeButton}
                    icon={<FontIcon className="muidocs-icon-custom-github" />}
                />

            </div>
        )
    }
}

export default SideLeft;