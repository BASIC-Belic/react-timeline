import React from 'react';

class NameDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //reading from props while setting initial state
      name: this.props.name,
      shouldDisplayName: true
    }
  }
  onButtonClick = () => {
    this.setState({
      shouldDisplayName: !this.state.shouldDisplayName
    })
  }
  onButtonClick = () => {
    this.setState({
      shouldDisplayName: !this.state.shouldDisplayName
    })
  }
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    let displayText = "I dont think I should display you";
    if (this.state.shouldDisplayName) {
      displayText = `Hi, your name is ${this.state.name}`
    }
    return (
      <div>
      <h2>{displayText} </h2>
      <button onClick={this.onButtonClick}>Toggle Display</button>
      <input type="text" onChange={this.onNameChange}/>
      </div>
    );
  }
}

export default NameDisplay;
