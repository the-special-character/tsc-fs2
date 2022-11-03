import React, { Component } from 'react'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todoList: [],
        };

    }

    // onChangeText = event => {
    //     this.setState({ todoText: event.target.value });
    // };

    addTodo = event => {
        event.preventDefault();
        this.setState(({ todoList }) => ({
            todoList: [...todoList, { id: new Date().valueOf(), text: this.todoTextRef.value }],

        }),
            () => {
                this.todoTextRef.value = '';
            },
        );
    };

    render() {
        console.log('render');
        const { todoList } = this.state;
        return (
            <><form onSubmit={this.addTodo}>
                <div className='flex flex-col items-center '>
                    <h1 className='text-4xl font-bold my-8'>Todo App</h1>
                    <input type="text"
                        ref={ref => {
                            this.todoTextRef = ref;
                        }}
                    // value={todoText} onChange={this.onChangeText} 
                    />
                    <button type="button" className='rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Add Todo</button>
                </div>
            </form>
                <div>
                    {todoList.map((x) => (
                        <div key={x.id}>
                            {x.text}
                        </div>
                    ))}
                </div></>
        )
    }
}
