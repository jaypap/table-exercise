import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';



class PersonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput:{}
      };
  }
  
  //choose role(SysAdmin, Manager...)  
  setRole = (e,idx,value) => {
    this.setState({
      userInput:{
        ...this.state.userInput,
        role: value
      }
    });
    //set time 200msec in order to change in proper time
    setTimeout(()=>{this.props.onChange(this.state.userInput)},200);
  }
  
  // insert text in fields
  setValue = (e) => {
    this.setState({
      userInput:{
        ...this.state.userInput, 
        [e.target.name]:e.target.value
      }
    });
    //set time 200msec in order to change in proper time
    setTimeout(()=>{this.props.onChange(this.state.userInput)},200);
  }
    
  render(){
    return(
      <div>
        <TextField
          hintText="Insert First Name"
          floatingLabelText="First Name"
          onChange={this.setValue}
          name="firstName"
          type="text"
        /><br />
        <TextField
          hintText="Insert Last Name"
          floatingLabelText="Last Name"
          onChange={this.setValue}
          name="lastName"
          type="text"
        /><br />
        <TextField
          hintText="Insert your email"
          floatingLabelText="email"
          onChange={this.setValue}
          name="email"
          type="email"
        /><br />
        <SelectField
          floatingLabelText="role"
          onChange={this.setRole}
          value={this.state.userInput.role}
        >
          <MenuItem value={"SysAdmin"} primaryText="SysAdmin" />
          <MenuItem value={"Manager"} primaryText="Manager" />
          <MenuItem value={"Operations"} primaryText="Operations" />
          <MenuItem value={"Employee"} primaryText="Employee" />
          <MenuItem value={"Manager"} primaryText="Manager" />
        </SelectField>
      </div>
        
    );
    
  }
    
}
      
      
         
          
    
        
      
  


export default PersonForm;