import React from 'react';

class MyLink1 extends React.Component{
    render() {
        const ex= React.createElement('a',
            {href: "http://www.cnn.com"},
                `Read more about news`
        )
        return React.createElement('p', null,
            ex
        );
    }
}

export default MyLink1;