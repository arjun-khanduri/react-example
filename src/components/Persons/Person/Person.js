import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        return (
            <Aux>
                <div className="Person" >
                    {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                    <div>
                        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                        <p>{this.props.children}</p>
                    </div>
                    <input type="text"
                        ref={this.inputElementRef}
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