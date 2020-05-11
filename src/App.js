import React, { Component } from 'react';
import Emulator from './emulator/emulator';
import Button from './components/Button/Button';

import './App.css';

class App extends Component {
   render() {
      return (
         <div className='App'>
            {/* Remove Emulator for Live */}
            <Emulator />
            <h1 className='heading-primary'>CH5 Start Page </h1>
            <ch5-button
               type='primary'
               label='Ch5 Button'
               sendEventonClick='1'
            ></ch5-button>
            <Button label='Custom Button' press='2' />
         </div>
      );
   }
}

export default App;
