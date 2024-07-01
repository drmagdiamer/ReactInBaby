import '../App.css';
import React  from 'react';

class CartItems extends React.Component{
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    }
}
export default CartItems;