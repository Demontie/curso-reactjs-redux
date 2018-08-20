import React, { Component } from 'react';

class Hello extends Component {
    constructor(props){
        super(props)
        this.handleClickBtn = this.handleClickBtn.bind(this)
    }
  
    componentWillMount(){
      this.setState({
        msg:''
      })
    }
  
    handleClickBtn(){
      this.setState({
        msg: 'Olá mundo!'
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClickBtn}>Click aqui</button>
          <p>{this.state.msg}</p>
        </div>
      );
    }
}

export default Hello;