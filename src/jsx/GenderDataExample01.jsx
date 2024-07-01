import React, { Component } from 'react';

// NormalInput component: Renders a label and input
class NormalInput extends Component {
    render() {
        const { label, name } = this.props;
        return (
            <div>
                <label>{label}</label>
                <input type="text" name={name} />
            </div>
        );
    }
}

// GenderInput component: Conditionally renders based on gender
class GenderInput extends Component {
    render() {
        const { gender, requiredGender, label, name } = this.props;
        const style = {
            display: gender === requiredGender ? 'block' : 'none'
        };

        return (
            <div style={style}>
                <label>{label} ({requiredGender})</label>
                <input type="text" placeholder={`${requiredGender} specific field`} name={name} />
            </div>
        );
    }
}

// GenderData component: Manages rendering based on gender prop
class GenderData extends Component {
    constructor(props) {
        super(props);
        this.gender = props.gender; // Initialize gender from props
    }

    render() {
        const { children } = this.props;
        const gender = this.gender;

        // Using React.Children.map to clone elements with the gender prop
        const renderChildren = React.Children.map(children, child => {
            if (child.type === GenderInput || child.type === NormalInput) {
                return React.cloneElement(child, { gender });
            }
            return child;
        });

        return (
            <div>
                {renderChildren}
            </div>
        );
    }
}

class JsxExample06 extends React.Component {
    render() {
       return <div>
           <h2>Form Example Male</h2>
           <form>
               <GenderData gender="M">
                   <NormalInput label="Name" name="name"/>
                   <NormalInput label="Age" name="age"/>
                   <GenderInput label="Favorite Sport" name="favorite_sport" requiredGender="M"/>
                   <GenderInput label="Favorite Hobby" name="favorite_hobby" requiredGender="F"/>
               </GenderData>

               <button type="submit">Submit</button>
           </form>
           <br/>

           <h2>Form Example Female</h2>
           <form>
               <GenderData gender="F">
                   <NormalInput label="Name" name="name"/>
                   <NormalInput label="Age" name="age"/>
                   <GenderInput label="Favorite Sport" name="favorite_sport" requiredGender="M"/>
                   <GenderInput label="Favorite Hobby" name="favorite_hobby" requiredGender="F"/>
               </GenderData>

               <button type="submit">Submit</button>
           </form>
       </div>;
    }
}

export {GenderData, NormalInput, GenderInput, JsxExample06};
