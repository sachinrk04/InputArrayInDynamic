import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  };

  addCountry () {
    this.setState({ countries :[...this.state.countries, ""]})
  }

  handleChange (e, index) {
    this.state.countries[index] = e.target.value
    this.setState({countries: this.state.countries})
  }

  handleRemove (index) {
    this.state.countries.splice(index, 1);
    console.log(this.state.countries);

    this.setState({countries: this.state.countries})
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h1>THE FORM</h1>
        <label>Address</label>
        {
          this.state.countries.map((country, index) => {
            return (
              <div key={index}>
                <input onChange={(e) => this.handleChange(e, index)} value={country} />
                <button onClick={() => this.handleRemove(index)}>Remove</button>
              </div>
            )
          })
        }
        <hr/>
        <button onClick={(e) => this.addCountry(e)}>Add Country</button>
        <hr/>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default App;
