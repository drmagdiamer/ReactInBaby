import '../App.css';
import React, {Fragment} from 'react';
import MyText from "./MyText";



class JsxExample05 extends React.Component {
    render() {
        return <Fragment>
            <MyText fontSize="10"   color="Blue"> This is my new element</MyText>
            <MyText fontSize="24"   color="Red"> React is so <em>powerful</em> </MyText>
        </Fragment>;
    }
}
export default JsxExample05;