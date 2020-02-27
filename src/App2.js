import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleMinusButton = this.handleMinusButton.bind(this);
    this.handlePlusButton = this.handlePlusButton.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }
  handlePlusButton(){
    this.setState({
      count: this.state.count +1
    })
  } 
  handleMinusButton(){
    this.setState({
      count: this.state.count -1
    })
    

  }
  handleResetButton(){
    this.setState({
      count: 0
    })
  }
  render(){
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <p>
          <button onClick={this.handlePlusButton}>+</button>
          <button onClick={this.handleMinusButton}>-</button>
          <button onClick={this.handleResetButton}>Reset</button>
        </p>
      </div>
    )
  }
}

export default App;
