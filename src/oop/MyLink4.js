import React from 'react';
class MyLink4 extends React.Component{
    render() {
        return React.createElement('p', null,
            React.createElement('a', {href: this.props.url},
                this.props.children
            )
        );
    }
}
export default MyLink4;