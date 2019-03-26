import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Button extends Component {
  renderSubmit(value) {
    if (value === 'english') {
      return value;
    } else if (value === 'lithuanian') {
      return 'Pativrtinti';
    } else if (value === 'russian') {
      return 'Отправить';
    } else {
      return 'Enviar';
    }
  }

  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
