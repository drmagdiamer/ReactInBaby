import React from 'react';
class ProfileLink extends React.Component{
    render() {
        return<p> <em>{this.props.label}</em> <a
            href={this.props.url}
            target="_blank" rel="noreferrer"
        > {this.props.text}
        </a></p>
    }
}
export default ProfileLink;