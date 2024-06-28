import '../App.css';
import React from 'react';
import MyLink4 from './MyLink4';

class Example5 extends React.Component {
    render() {
        const link1 =
            React.createElement(MyLink4, { url : '//reactjs.org'},
                React.createElement("h2", null, "React"),
                "hello world"
            );
        const link2 =
            React.createElement(MyLink4, { url : '//vuejs.org'}, 'Vue');
        const link3 =
            React.createElement(MyLink4, { url : '//angular.io'}, "Angular");
        const group =
            React.createElement(React.Fragment, null, link1, link2, link3);
        return group;
    }

}
export default Example5;