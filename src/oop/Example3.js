import '../App.css';
import React from 'react';
import MyLink2 from "./MyLink2";


class Example3 extends React.Component {
    render() {
        // return( <h1> This is my first component </h1>)
        const ex1
            = React.createElement(MyLink2, { url : '//reactjs.org'},
                );
        const ex2
            = React.createElement(MyLink2, { url : '//w3c.org'},);
        // return (React.createElement('div', null, ex1, ex2));
        return( React.createElement(React.Fragment, null, ex1, ex2));
    }

}

export default Example3;