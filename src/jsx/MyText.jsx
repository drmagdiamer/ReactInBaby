import React from 'react';
class MyText extends React.Component{
    render() {
        const fontSize = this.props.fontSize;
        const myStyle = {
            fontSize: `${fontSize}px`,
            color: this.props.color
        };
        return<p style={myStyle}> {this.props.children}
        </p>
    }
}
export default MyText;