import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Aboout from './components/About';
import Post from './components/Post';

class App extends React.Component {

 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={Aboout}/>
        <Route path="/:post_id" component={Post}/>
        </Switch>
        
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
