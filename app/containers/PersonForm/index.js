import React from 'react';
import TextField from 'material-ui/TextField';

class PersonForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userInput:{}
      };
    /*const randkey = "blabla"
      let aobj = {
        hola:"assa",
        [randkey]: "dfdf"
      }
      console.log(aobj)
      aobj = {...aobj, hola:"sdssss"}
      console.log(aobj)*/
      
   }
  
  handleUserInput = (e, values) => {
    e.preventDefault()
    console.log(this.state.userInput)
  
      
  }
  setValue = (e) => {
    this.setState({
      userInput:{
        ...this.state.userInput, 
        [e.target.name]:e.target.value
      }
    })
  }
  render(){
    return(
      <div>
      <form 
      // style={{display:"inline-flex"}}
        onSubmit={this.handleUserInput}
        >
        <TextField
          hintText="Insert ID"
          floatingLabelText="ID"
          onChange={this.setValue}
          name="id"
        /><br />
        <TextField
          hintText="Insert First Name"
          floatingLabelText="First Name"
          onChange={this.setValue}
          name="firstName"
        /><br />
        <TextField
          hintText="Insert Last Name"
          floatingLabelText="Last Name"
          onChange={this.setValue}
          name="lastName"
        /><br />
        <TextField
          hintText="Insert your email"
          floatingLabelText="email"
          onChange={this.setValue}
          name="email"
        /><br />
        <TextField
          hintText="Your role"
          floatingLabelText="role"
          onChange={this.setValue}
          name="role"
        />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
    
  }
    
  }
  


export default PersonForm;