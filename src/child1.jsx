import React, { PureComponent } from 'react';

export default class Child1 extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);

    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      this.mouseMove,
    );
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('mouse Move...');
  };

  render() {
    console.log('chikd 1 render');

    return <div>hello {this.props.name}</div>;
  }
}
