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

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  onFormChange = (data) => {
      console.log(data)
      this.setState({data})
      
    }
  /*  closeOnClick=()=>{
    self.close();
    return true;
    }*/
    
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
        <RaisedButton label="Open Form" onTouchTap={this.handleOpen} />
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