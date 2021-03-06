import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          <i
            className='flag gb'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag lt'
            onClick={() => this.onLanguageChange('lithuanian')}
          />
          <i
            className='flag ru'
            onClick={() => this.onLanguageChange('russian')}
          />
          <i
            className='flag es'
            onClick={() => this.onLanguageChange('spanish')}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
