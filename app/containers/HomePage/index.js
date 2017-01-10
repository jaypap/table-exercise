/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import axios from 'axios';
import PersonForm from '../PersonForm';


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      persons: []
    }
    
  }
  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("https://simplybook.herokuapp.com/users")
        .then(function(result) {    
          _this.setState({
            persons: result.data
          });
          console.log(result)
        })
  }
  
  render() {
    return (
      <div>
        <PersonForm/>
        <Table>
          
          <TableHeader>
          
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Firstname</TableHeaderColumn>
              <TableHeaderColumn>Lastname</TableHeaderColumn>
              <TableHeaderColumn>email</TableHeaderColumn>
              <TableHeaderColumn>role</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          
              {this.state.persons.map(function(person, index){
                
                return(
                  <TableRow key={index}>
                        <TableRowColumn>{person.id}</TableRowColumn>
                        <TableRowColumn>{person.firstName}</TableRowColumn>
                        <TableRowColumn>{person.lastName}</TableRowColumn>
                        <TableRowColumn>{person.email}</TableRowColumn>
                        <TableRowColumn>{person.role}</TableRowColumn>
                  </TableRow>      
                );
              })}
            
          </TableBody>
        </Table>
      </div>

    );
  }
}
