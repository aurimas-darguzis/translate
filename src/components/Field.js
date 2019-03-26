import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
  renderLabelName(value) {
    if (value === 'english') {
      return 'Name';
    } else if (value === 'lithuanian') {
      return 'Vardas';
    } else if (value === 'russian') {
      return 'Hазвание';
    } else {
      return 'Nombre';
    }
  }

  render() {
    return (
      <div className='ui field'>
        <label htmlFor='name'>
          <LanguageContext.Consumer>
            {value => this.renderLabelName(value)}
          </LanguageContext.Consumer>
        </label>
        <input type='text' />
      </div>
    );
  }
}
