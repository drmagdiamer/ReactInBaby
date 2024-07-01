import '../App.css';
import React, {Fragment} from 'react';
import ShoppingCartBad from "./ShoppingCartBad";
import ShoppingCartGood from "./ShoppingCartGood";


class JsxExample04 extends React.Component {
    render() {
        return <Fragment>
            <ShoppingCartBad txt="A1" items={["aa","bb","cc"]}  >Hello React </ShoppingCartBad>
            <ShoppingCartBad txt="A2" items={[]}  >Hello React </ShoppingCartBad>
            <ShoppingCartGood txt="B1" items={["aa","bb","cc"]}  >Hello React </ShoppingCartGood>
            <ShoppingCartGood txt="B2" items={[]}  >Hello React </ShoppingCartGood>
        </Fragment>;
    }
}
export default JsxExample04;