import React, { Component } from 'react';
import Numeral from 'numeral';

import ReactSlider from 'react-slider';

class Slider extends Component {
   constructor(props) {
      super(props);
      this.state = { valueNow: 0, scaledValue: 0 };
      this.value = 0;
      this.updateAnalog = this.updateAnalog.bind(this);
      // this.updateNouiAnalog = this.updateNouiAnalog.bind(this);
   }

   static defaultProps = {
      class: '',
      join: '1',
      label: '1',
   };

   componentDidMount() {
      window.CrComLib.subscribeState(
         'n',
         this.props.join,
         function (value) {
            let per = Numeral(value / 65535).format('0%');

            this.setState({ valueNow: value, scaledValue: per });
         }.bind(this)
      );
   }

   updateAnalog(val) {
      console.log(val);
      window.CrComLib.publishEvent('n', this.props.join, val);
   }

   render() {
      return (
         <>
            <div className='sliderContainer'>
               <p className='slider__text'>{this.state.scaledValue}</p>
               <ReactSlider
                  className='slider'
                  thumbClassName='slider__thumb'
                  trackClassName='slider__track'
                  max={65535}
                  value={this.state.valueNow}
                  onChange={(val) => this.updateAnalog(val)}
                  // renderThumb={(props, state) => (
                  //    <div {...props}>{state.valueNow}</div>
                  // )}
               />
            </div>
         </>
      );
   }
}

export default Slider;
