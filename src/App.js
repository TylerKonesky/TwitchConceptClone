import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/header';
import history from '../src/history';

function App() {
  return (
    <div className="ui container">
      
      <Router history={history}>
        <div>
          
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' component={StreamCreate}/>
            <Route path='/streams/edit/:id' component={StreamEdit}/>
            <Route path='/streams/delete/:id' component={StreamDelete}/>
            <Route path='/streams/:id' component={StreamShow}/>
          </Switch>
        </div>
       
      </Router>   
    </div>
  );
}

export default App;
