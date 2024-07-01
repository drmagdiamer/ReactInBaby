import '../App.css';
import React, { Component } from 'react';
class ConstructorExample02 extends Component {
    constructor(props) {
        super(props);
        this.author = this.props.author || "Your Teacher";
        // No need to initialize `this.author` in the constructor anymore
    }

    render() {
        const { message } = this.props;
        return (
            <>
                <h2>Welcome to React!</h2>
                <p>This is a sample component using React's class component syntax.</p>
                <p>{message}</p>
                <p>Message written by: {this.author}</p>
            </>
        );
    }
}

export default ConstructorExample02;