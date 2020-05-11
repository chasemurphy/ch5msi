import React, { Component } from 'react';
import '../../assets/scss/components/_button.scss';

class Button extends Component {
   constructor(props) {
      super(props);
      this.state = { text: 'Start', classState: 'initial' };
      this.clicked = this.clicked.bind(this);
      this.released = this.released.bind(this);
      this.join = this.props.press;
      this.labelJoin = this.props.labelJoin;
   }

   static defaultProps = {
      class: 'btn',
      press: '1',
      label: '1',
   };

   clicked() {
      window.CrComLib.publishEvent('b', this.join, true);
   }

   released() {
      window.CrComLib.publishEvent('b', this.join, false);
   }

   componentDidMount() {
      window.CrComLib.subscribeState(
         'b',
         this.join,
         function (value) {
            if (value) {
               this.setState({
                  classState: 'Button ' + this.props.class + ' active',
               });
            } else {
               this.setState({ classState: 'Button ' + this.props.class });
            }
         }.bind(this)
      );
   }

   render() {
      return (
         <button
            className={this.state.classState}
            onTouchStart={this.clicked}
            onTouchEnd={this.released}
         >
            <i className={this.props.icon}></i>
            <div>{this.props.label}</div>
         </button>
      );
   }
}

export default Button;
