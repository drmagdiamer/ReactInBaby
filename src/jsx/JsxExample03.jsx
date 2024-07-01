import '../App.css';
import React, {Fragment} from 'react';
import ProfileLink2 from "./ProfileLink2";
import ProfileLink from "./ProfileLink";

class JsxExample03 extends React.Component {
    render() {
        return <Fragment>
            <ProfileLink2 url="http://reactjs.org" label="React"  >Hello React</ProfileLink2>
            <ProfileLink2 url="http:////vuejs.org" label="Vue"  ><i>Vue</i></ProfileLink2>
            <ProfileLink2 url="http://angular.io" label="Angular"  >This is <em>Angular</em></ProfileLink2>
        </Fragment>;
    }
}
export default JsxExample03;