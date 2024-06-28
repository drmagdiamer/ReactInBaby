import '../App.css';
import React from 'react';
class ButtonList  extends React.Component {
    getButton(txt){
        return <button disabled={this.props.disabled}>{txt}</button>;
    }
    render() {
        return <aside>
            {this.getButton('UP')}
            {this.getButton('DOWN')}
        </aside>
    }
}
export default ButtonList;