import React, { Component } from 'react';

// NormalInput component: Renders a label and input
class NormalInput02 extends Component {
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
class GenderInput02 extends Component {
    render() {
        const { gender, requiredGender, label, name } = this.props;

        if (gender === requiredGender) {
            return (
                <div>
                    <label>{label} ({requiredGender})</label>
                    <input type="text" placeholder={`${requiredGender} specific field`} name={name} />
                </div>
            );
        } else {
            return null; // Handle other cases or default behavior
        }
    }
}

// GenderData component: Manages rendering based on gender prop
class GenderData02 extends Component {
    constructor(props) {
        super(props);
        this.gender = props.gender; // Initialize gender from props
    }

    render() {
        const { children } = this.props;
        const gender = this.gender;

        // Using React.Children.map to clone elements with the gender prop
        const renderChildren = React.Children.map(children, child => {
            if (child.type === GenderInput02 || child.type === NormalInput02) {
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

class JsxExample07 extends React.Component {
    render() {
       return <div>
           <h2>Form Example Male</h2>
           <form>
               <GenderData02 gender="M">
                   <NormalInput02 label="Name" name="name"/>
                   <NormalInput02 label="Age" name="age"/>
                   <GenderInput02 label="Favorite Sport" name="favorite_sport" requiredGender="M"/>
                   <GenderInput02 label="Favorite Hobby" name="favorite_hobby" requiredGender="F"/>
               </GenderData02>

               <button type="submit">Submit</button>
           </form>
           <br/>

           <h2>Form Example Female</h2>
           <form>
               <GenderData02 gender="F">
                   <NormalInput02 label="Name" name="name"/>
                   <NormalInput02 label="Age" name="age"/>
                   <GenderInput02 label="Favorite Sport" name="favorite_sport" requiredGender="M"/>
                   <GenderInput02 label="Favorite Hobby" name="favorite_hobby" requiredGender="F"/>
               </GenderData02>

               <button type="submit">Submit</button>
           </form>
       </div>;
    }
}

export {GenderData02, NormalInput02, GenderInput02, JsxExample07};
