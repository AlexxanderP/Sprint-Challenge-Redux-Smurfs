import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import SmurfsList from "./SmurfsList";

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };


  componentDidMount = () => {
    this.props.getSmurfs();
  };

  handleFormChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(newSmurf);
console.log('newsmurf', newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList smurfs={this.props.smurfs} />
        <form onSubmit={this.handleAddSmurf}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);