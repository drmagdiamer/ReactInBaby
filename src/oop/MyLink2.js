import React from 'react';

class MyLink2 extends React.Component{
    render() {
        const ex= React.createElement('a',
            {href: this.props.url},
            `Read more about news`
        )
        return React.createElement('p', null,
            ex
        );
    }
}

export default MyLink2;