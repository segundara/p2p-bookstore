import React from 'react';
import {Badge} from 'react-bootstrap';

class MyBadge extends React.Component{
    render(){
        return(
            <div>
                <Badge variant={this.props.color}>{this.props.text}</Badge>
            </div>
        )
    }
}

export default MyBadge;