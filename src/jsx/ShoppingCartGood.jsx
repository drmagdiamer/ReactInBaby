import '../App.css';
import React from 'react';
import CartItems from "./CartItems";


class ShoppingCartGood extends React.Component {
    render() {
        return (
            <aside>
                <h1>Shopping cart {this.props.txt}</h1>
                <CartItems items={this.props.items} />
                {this.props.items.length>0 && <button>Checkout</button>}
            </aside>
        );
    }
}

export default ShoppingCartGood;