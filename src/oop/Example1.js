import '../App.css';
import React from 'react';


class Example1 extends React.Component {
    render() {
        // return( <h1> This is my first component </h1>)
        const ex
            = React.createElement('h1', null, 'Hello World', <br/>, 'This is my first example');
        return (ex);
    }

}

export default Example1;