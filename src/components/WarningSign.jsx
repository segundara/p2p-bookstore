import React from 'react';
import {Alert} from 'react-bootstrap';

class WarningSign extends React.Component{
    render(){
        return(
            <Alert variant='danger' className="mt-5">
                {this.props.text}
            </Alert>
        )
    }
}

export default WarningSign;