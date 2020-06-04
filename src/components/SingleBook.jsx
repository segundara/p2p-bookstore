import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
//import book from '../data/fantasy.json';
  

class SingleBook extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Col className="col-md-3 py-3" >
                <Card style={{width: 15 + 'rem', height: 30 + 'rem'}} key={this.props.asin}>
                    <Card.Img className="img-fluid" variant="top" src={this.props.img} style={{width: 15 + 'rem', height: 15 + 'rem'}}/>
                    <Card.Body >
                        <Card.Title className="font-weight-light">{this.props.title}</Card.Title>
                    </Card.Body>
                </Card>  
            </Col>
        );
    }
}

export default SingleBook;