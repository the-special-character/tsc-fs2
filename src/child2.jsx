import React, { Component } from 'react';

// state value change
// props value chage

export default class Child2 extends Component {
  state = {
    counter: 0,
    name: 'Yagnesh',
  };

  render() {
    console.log('render');
    const { designation } = this.props;
    const { counter, name } = this.state;

    return (
      <div>
        <h2>my designation is {designation}</h2>
        <h3>{name}</h3>

        <button
          type="button"
          onClick={() => {
            // this.setState({ counter: 5 });
            this.setState(({ counter }) => ({
              counter: counter + 1,
              name: 'Rahul',
            }));
            // this.state.counter = 5;
            // counter = counter + 1;
            // console.log(this.state.counter);
          }}
          className="bg-red-400 mx-4"
        >
          Increment
        </button>
        <p>{counter}</p>
        <button type="button" className="bg-red-400 mx-4">
          Decrement
        </button>
      </div>
    );
  }
}
