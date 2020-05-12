import React, { Component } from 'react';
//import Emulator from './emulator/emulator';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider';

import './App.css';

class App extends Component {
   render() {
      return (
         <div className='App'>
            {/* Remove Emulator for Live */}
            {/* <Emulator /> */}
            <div className='heading'>
               <h1 className='heading-primary--main u-center-text'>
                  CH5 MSI Template
               </h1>
            </div>
            <ch5-button
               type='primary'
               label='Ch5 Button'
               sendEventonClick='1'
               customClass='u-center-text'
            ></ch5-button>
            <div className='u-center-text'>
               <Button label='Custom Button' press='2' class='u-center-text' />
            </div>

            <Slider />
         </div>
      );
   }
}

export default App;
