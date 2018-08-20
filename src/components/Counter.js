import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterActions from '../actions/CounterActions';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }
    handleIncrement() {
        this.props.onIncrement()
    }
    handleDecrement() {
        this.props.onDecrement()
    }

    render() {
        const {value} = this.props
        //console.log(this.props)
        return (
            <div>
                <h1>Clickes: {value} </h1>
                <button onClick={this.handleIncrement}>Incrementar</button>
                <button onClick={this.handleDecrement}>Decrementar</button>
            </div>
        );
    }
}

//mapStateToProps é um padrão a ser seguido
//Envia o meu state para minha propriedade(props)
//Quando se coloca o state.counter, ele ta pegando todos os estados(state) que forem definido no reducer(no index.js na pasta reducers)
const mapStateToProps = (state) => {
    return {
        value:state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(CounterActions.onIncrement(value)),
        onDecrement:(value) => dispatch(CounterActions.onDecrement(value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)