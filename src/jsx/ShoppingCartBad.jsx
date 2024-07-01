import '../App.css';
import React from 'react';
import CartItems from "./CartItems";


class ShoppingCartBad extends React.Component {
    render() {
        return (
            <aside>
                <h1>Shopping cart {this.props.txt}</h1>
                <CartItems items={this.props.items} />
                {this.props.items.length && <button>Checkout</button>}
            </aside>
        );
    }
}

export default ShoppingCartBad;