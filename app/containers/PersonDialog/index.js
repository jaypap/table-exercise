import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PersonForm from '../PersonForm';



export default class DialogExampleSimple extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       open: false,
       data:{}
    };
  }
  
  //open Create Users 
  handleOpen = () => {
    this.setState({open: true});
  };
  
  //close Create Users
  handleClose = () => {
    this.setState({open: false});
  };
  
  //update data to PersonForm
  onFormChange = (data) => {
    this.setState({data});
  }
    
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        type="submit" 
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=>this.props.onSubmit(this.state.data)}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create Users" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog Form"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <PersonForm onChange={this.onFormChange}/>
        </Dialog>
      </div>
    );
  }
}