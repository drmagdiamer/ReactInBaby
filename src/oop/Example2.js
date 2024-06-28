import '../App.css';
import React from 'react';
import MyLink1 from "./MyLink1";
import MyLink2 from "./MyLink2";


class Example2 extends React.Component {
    render() {
        // return( <h1> This is my first component </h1>)
        const ex1
            = React.createElement(MyLink1);
        const ex2
            = React.createElement(MyLink1);
        // return (React.createElement('div', null, ex1, ex2));
        return( React.createElement(React.Fragment, null, ex1, ex2));
    }

}

export default Example2;