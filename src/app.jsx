import React, { Component } from 'react';
import Child2 from './child2';

export default class App extends Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        <Child2 designation="software engineer 1" xyz={5} />
      </div>
    );
  }
}
