import React, { Component } from 'react';

import Image from '../src/components/image-res/image';

import Search from './components/search/search';

class App extends Component {
  render() {
    return (
      
      <div >
        
        <Search/>
        <Image/>
      </div>
      
    );
  }
}

export default App;
