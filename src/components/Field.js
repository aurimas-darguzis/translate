import React, { Component } from 'react';

export default class Field extends Component {
  render() {
    return (
      <div className='ui field'>
        <label htmlFor='name'>Name</label>
        <input type='text' />
      </div>
    );
  }
}
