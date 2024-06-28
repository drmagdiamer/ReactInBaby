import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../App";
class MyLink3 extends React.Component{
    render() {
        return React.createElement('p', null,
            React.createElement('a', {href: this.props.url},
                `Read more about ${this.props.framework}`
            )
        );
    }
}

export default MyLink3;