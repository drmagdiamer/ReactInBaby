import React from 'react';
class ProfileLink2 extends React.Component{
    render() {
        return<p> <em>{this.props.label}</em> <a
            href={this.props.url}
            title={this.props.label}
            target="_blank" rel="noreferrer"
        > {this.props.children}
        </a></p>
    }
}
export default ProfileLink2;