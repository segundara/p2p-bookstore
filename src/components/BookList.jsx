import React from 'react';
import {Row, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import SingleBook from './SingleBook'

let books = {
    fantasy: require('../data/fantasy.json'),
    history: require('../data/history.json'),
    horror: require('../data/horror.json'),
    romance: require('../data/romance.json'),
    scifi: require('../data/scifi.json'),
  }
  
let bookCategories = ['fantasy','history','horror','romance','scifi']

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: books.fantasy.slice(0, 10),
            categorySelected: '',
        };
    }

    handleDropdownChange = (category) => {
        this.setState({books: books[category].slice(0,10), categorySelected: category});
    };

    handleSearchQuery = (searchQuery) => {
        let category = this.state.categorySelected;

        if (searchQuery) {
            let filteredbooks =books[category].filter((book) => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()));

            this.setState({books: filteredbooks.slice(0,10)});
        }
        else {
            this.setState({books: books[category].slice(0,10)});
        }
    }

    render(){
        return(
            <>
            <InputGroup className='my-3'>
            <DropdownButton
                id='dropdown-basic-button'
                className='mb-3'
                title={this.state.categorySelected}
                >
                {bookCategories.map((category, index) => {
                    return(
                        <Dropdown.Item
                            href='#/action-1'
                            key={`cat-${index}`}
                            onClick={() => this.handleDropdownChange(category)}
                        >{category}
                        </Dropdown.Item>
                    );
                })}    
                </DropdownButton>
                <FormControl
                    placeholder='Search books by title'
                    aria-label='search'
                    aria-describedby='basic-addon1'
                    onChange={(e) => this.handleSearchQuery(e.target.value)}
                />
                </InputGroup>
            
            <Row className="mx-0 pb-3">
                {this.state.books.map((book) => {
                    console.log(book)
                    return (
                            <SingleBook 
                                singleBook={book}
                            /> 
                    );
                })}
                
            </Row>
            </>

        )
    }
}

export default BookList;