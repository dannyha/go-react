import React, { Component } from 'react'
import Form from '../components/Form'
import Result from '../components/Result'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', weather: '', image: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, weather: '', image: ''});
  }

  handleSubmit(event) {
    fetch(`http://localhost:9500/getweather`, {
      method: "POST",
      body: JSON.stringify({city: this.state.value})
    })
    .then((response) => response.json())
    .then((responseData) => {
      var image;
      if (responseData.celsius <= 10) {
        image = './images/cloudy.png';
      } else if (responseData.celsius <= 20) {
        image = './images/partly.png';
      } else {
        image = './images/sunny.png';
      }
      this.setState({weather: String(responseData.celsius), image: image});
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Form value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>
        <div className="row">
          {this.state.weather ? <Result value={this.state.value} weather={this.state.weather} image={this.state.image} /> : ''}
        </div>
      </div>
    );
  }
}

export default App