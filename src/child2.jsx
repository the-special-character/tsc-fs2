import React, { Component } from 'react';
import Child1 from './child1';

// state value change
// props value chage

// Mounting

// Constructor
// getDerivedStateFromProps
// render
// componentDidMount

// Updating

// getDerivedStateFromProps
// PureComponent // shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

export default class Child2 extends Component {
  state = {
    counter: 0,
    name: 'Yagnesh',
    todo: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: props.xyz,
  //     name: 'Yagnesh',
  //   };
  //   // this.increment = this.increment.bind(this);

  //   // analytics
  // }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     counter:
  //       state.counter === 0 ? props.xyz : state.counter + 5,
  //   };
  // }

  increment = () => {
    // this.setState({ counter: 5 });
    this.setState(({ counter }) => ({
      counter: counter + 1,
      name: 'Rahul',
    }));
    // this.state.counter = 5;
    // counter = counter + 1;
    // console.log(this.state.counter);
  };

  // get servet data on page load;
  async componentDidMount() {
    // const header = document.getElementById('header2');
    this.h2.style = 'color: red';
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      const json = await res.json();
      this.setState({ todo: json });
    } catch (error) {}
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('snapshot', snapshot);
  }

  render() {
    console.log('child 2 component');
    const { designation } = this.props;
    const { counter, name, todo } = this.state;

    if (counter > 5) {
      throw new Error(
        'please try after some time. contact your admin...',
      );
    }

    return (
      <div>
        <h2
          ref={ref => {
            this.h2 = ref;
          }}
        >
          my designation is {designation}
        </h2>
        <h3>{name}</h3>
        <p>{todo?.title}</p>

        <button
          type="button"
          onClick={this.increment}
          className="bg-red-400 mx-4"
        >
          Increment
        </button>
        <p>{counter}</p>
        <button type="button" className="bg-red-400 mx-4">
          Decrement
        </button>
        {counter < 5 && <Child1 name="Yagnesh" />}
      </div>
    );
  }
}
