import React, { Component } from 'react';

import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Arjun', age: '21' },
      { id: 2, name: 'Karan', age: '23' },
      { id: 3, name: 'Raj', age: '22' }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('App.js render');
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons}
          title={this.props.appTitle}
          style={style}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />


        {this.state.showPersons ? <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
