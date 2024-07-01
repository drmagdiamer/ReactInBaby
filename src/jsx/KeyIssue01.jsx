import '../App.css';
import React from 'react';
class KeyIssue01 extends React.Component {
    render() {
        //bad code
        const ItemList1 = ({ items }) => (
            <ul>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        );
        //good key handling
        const ItemList2 = ({ items }) => {
            return (
                <ul>
                    {React.Children.map(items, (item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        };

        return <> <ItemList1 items={["aa","bb","cc"]} /> <br/> <ItemList2 items={["aa","bb","cc"]}/> </> ;
    }
}


export default KeyIssue01;



