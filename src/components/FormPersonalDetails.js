import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog open="true" fullWidth="true" maxWidth="sm">
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange(`occupation`)}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange(`city`)}
              defaultValue={values.city}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange(`bio`)}
              defaultValue={values.bio}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <RaisedButton
              label="continue"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="back"
              primary={false}
              style={StyleSheet.button}
              onClick={this.back}
            />
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
