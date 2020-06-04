import React from 'react';
import WarningSign from './components/WarningSign';
import {Container} from 'react-bootstrap'
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <Container>
        <WarningSign text={'WatchOut!!!'}/>
        <MyBadge text={'Text inside badge'} color={'primary'}/>
        <BookList />
      </Container>
    </div>
  );
}

export default App;
