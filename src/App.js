import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: 'Arjun', age:'20'},
      {name: 'Karan', age:'21'}
    ]
  }
switchNameHandler = () => {
  this.setState({persons:[
    {name: 'Arjun', age:'20'},
    {name: 'Amit', age:'21'}
  ]})
}

nameChangeHandler = (event) => {
  this.setState({persons:[
    {name: 'Arjun', age:'20'},
    {name:event.target.value,age:21}
  ]})
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi! Welcome to React</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobby: Coding</Person>
        <Person changed={this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby: Coding</Person>
      </div>
    );
  }
}

export default App;
