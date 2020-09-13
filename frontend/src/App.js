import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      inputValue: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <React.Fragment>
          <form>
            <label htmlFor="username">Add Restaurant</label>
            <input
              type="text"
              name="restaurant"
              value={this.state.inputValue}
              onChange={this.updateInputValue}/>
          </form>
          <button onClick={this.handleChange}>Submit</button>
        </React.Fragment>
      </div>
    )
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleChange = () => {
    const name = this.state.inputValue;
    const id = this.state.restaurants.id + 1;
    const rating = 0;
    const info = {id: id, name: name, rating: rating};
    const data = this.state.restaurants;
    data.push(info);
    this.setState({
      data: data
    });
  }
}

export default App
