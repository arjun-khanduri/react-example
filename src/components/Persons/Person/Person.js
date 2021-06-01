import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        return (
            <Aux>
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
            </Aux>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Person;