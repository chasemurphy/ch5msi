import React, { Component } from 'react';
import './emulator.scss';

import smwEmulator from './emulator.json';

class Emulator extends Component {
   render() {
      return <div className='emulator'>Emulator Running</div>;
   }
}

export default Emulator;

class ConfigureEmulatorService {
   constructor() {
      this.ch5Emulator = window.CrComLib.Ch5Emulator.getInstance();
   }

   // init emulator
   initEmulator(emulator) {
      window.CrComLib.Ch5Emulator.clear();
      this.ch5Emulator = window.CrComLib.Ch5Emulator.getInstance();
      this.ch5Emulator.loadScenario(emulator);
      this.ch5Emulator.run();
   }
}

// Use these two lines if using emulator
const configureEmulatorService = new ConfigureEmulatorService();
configureEmulatorService.initEmulator(smwEmulator);
