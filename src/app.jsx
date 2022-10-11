import React, { Component } from 'react';

import Child1 from './child1';
import Child2 from './child2';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello From App</h1>
                <Child1 name="Jil" />
                <Child1 name="Shubh" />
                <Child2 designation="software engineer" />
            </div>
        );
    }
}