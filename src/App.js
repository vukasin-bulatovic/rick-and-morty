import React from 'react';
import './App.css';
import Main from './components/Main/Main'
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Character from './components/Character/Character'

function App() {

  return (

    <BrowserRouter>
      <div className='app'>
        <Switch>
        <Route path='/'component={Main} exact={true} />
        <Route path='/character/:id'component ={Character} />

        </Switch>
     </div>
   </BrowserRouter>
  
  );
}

export default App;
