import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import SingleBook from './SingleBook'

let books = {
    fantasy: require('../data/fantasy.json'),
    history: require('../data/history.json'),
    horror: require('../data/horror.json'),
    romance: require('../data/romance.json'),
    scifi: require('../data/scifi.json'),
  }
  

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: books.fantasy.slice(0, 10),
        };
    }

    render(){
        return(
            // console.log(this.state.books)
            
            <Row className="mx-0 pb-3">
                {this.state.books.map((item) => {
                    console.log(item)
                    return (
                            <SingleBook 
                                key={item.asin}
                                img={item.img}
                                title={item.title}
                            /> 
                    );
                })}
                
            </Row>


        )
    }
}

export default BookList;