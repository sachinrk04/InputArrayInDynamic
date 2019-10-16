import React, { Component } from 'react';
import SingleInput from './component/SingleInput';
import MultipleInput from './component/MultipleInput';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2>Single Input Field</h2>
        <SingleInput />
        <hr/>
        <h2>Multiple Input Field</h2>
        <MultipleInput />
      </div>
    );
  }
}

export default App;
