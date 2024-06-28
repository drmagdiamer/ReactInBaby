import '../App.css';
import React from 'react';
import MyLink3 from "./MyLink3";


class Example4 extends React.Component {
    render() {
        // return( <h1> This is my first component </h1>)
        const link1 =
            React.createElement(MyLink3, {framework: 'React', url : '//reactjs.org'});
        const link2 =
            React.createElement(MyLink3, {framework: 'Vue', url : '//vuejs.org'});
        const link3 =
            React.createElement(MyLink3, {framework: 'Angular', url : '//angular.io'});
        const group =
            React.createElement(React.Fragment, null, link1, link2, link3);
        return group;
    }

}

export default Example4;