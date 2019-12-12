import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog open="true" fullWidth="true" maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem
                primaryText="First Name"
                secondaryText={firstName}
              ></ListItem>
              <ListItem
                primaryText="Last Name"
                secondaryText={lastName}
              ></ListItem>
              <ListItem primaryText="Email" secondaryText={email}></ListItem>
              <ListItem
                primaryText="Occupation"
                secondaryText={occupation}
              ></ListItem>
              <ListItem primaryText="City" secondaryText={city}></ListItem>
              <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
            </List>
            <br />
            <RaisedButton
              label="Confirm & Continue"
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

export default Confirm;
