import React, { Component } from 'react';
import classes from './App.css';

import Person from '../components/Persons/Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Arjun', age: '21' },
      { id: 2, name: 'Karan', age: '23' },
      { id: 3, name: 'Raj', age: '22' }
    ],
    showPersons: false
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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi! Welcome to React</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle View</button>
        { this.state.showPersons ?
          <div >
            {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
          </div> : null}

      </div>
    );
  }
}

export default App;
