import React, { Component } from 'react';

class MultipleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [{"input_one": "", "input_two": "", input_three: ""}]
    };
  };

  addCountry () {
    const object = {"input_one": "", "input_two": "", input_three: ""}
    this.setState({ 
      countries :[...this.state.countries, object]},
      () => {console.log(this.state)}
    )
  }

  handleChange (e, index) {
    const countries = [...this.state.countries]
    if ("input_one" === e.target.name) {
      countries[index].input_one = e.target.value;
      this.setState({countries: countries},
        () => console.log(this.state)
      )
    } else if("input_two" === e.target.name) {
      countries[index].input_two = e.target.value;
      this.setState({countries: countries},
        () => console.log(this.state)
      )
    } else if("input_three" === e.target.name) {
      countries[index].input_three = e.target.value;
      this.setState({countries: countries},
        () => console.log(this.state)
      )
    }
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
    console.log(this.state.countries)
    return (
      <div className="MultipleInput">
        <h1>THE FORM</h1>
        <label>Address</label>
        {
          this.state.countries.map((country, index) => {
            return (
              <div key={index}>
                <input name="input_one" onChange={(e) => this.handleChange(e, index)} value={country.input_one} />
                <input name="input_two" onChange={(e) => this.handleChange(e, index)} value={country.input_two} />
                <input name="input_three" onChange={(e) => this.handleChange(e, index)} value={country.input_three} />
                <button onClick={() => this.handleRemove(index)}>Remove</button>
              </div>
            )
          })
        }
        <button onClick={(e) => this.addCountry(e)}>Add +</button>
        <hr/>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default MultipleInput;
