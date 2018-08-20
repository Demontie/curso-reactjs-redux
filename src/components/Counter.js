import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }
    handleIncrement() {

    }
    handleDecrement() {

    }

    render() {
        return (
            <div>
                <h1>Clickes: 0 </h1>
                <button onClick={this.handleIncrement} >Incrementar</button>
                <button onClick={this.handleDecrement}>Decrementar</button>
            </div>
        );
    }
}

export default Counter;