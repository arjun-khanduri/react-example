import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="Person" >
                <div>
                    <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                </div>
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
                <div>
                </div>
            </div>
        )
    }

}

export default Person;