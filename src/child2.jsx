import React, { Component } from 'react';

// state value change
// props value chage

export default class Child2 extends Component {
    state = {
        counter: 0,
        name: 'Jil',
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
                            name: 'Ayushi',
                        }));
                        // this.state.counter = 5;
                        // counter = counter + 1;
                        // console.log(this.state.counter);
                    }}
                    className="bg-teal-500 mx-4"
                >
                    Increment
                </button>
                <p>{counter}</p>
                <button type="button"
                    onClick={() => {
                        this.setState(({ counter }) => ({
                            counter: counter - 1,
                        }));
                    }}
                    className="bg-red-500 mx-4">
                    Decrement
                </button>
            </div>
        );
    }
}