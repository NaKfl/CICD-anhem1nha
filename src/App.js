import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase = () => {
    console.log(this);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Click me</button>
      </div>
    );
  }
}

export default App;
