import React from 'react';

class NameDisplay extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'initial state name',
      shouldDisplayName: true
    }
  }

  render() {
    let displayText = "I dont think I should display you";
    if (this.state.shouldDisplayName) {
      displayText = `Hi, your name is ${this.state.name}`
    }
    return (
      <h2>Placeholder text for name display component is named: {displayText} </h2>
    );
  }
}

export default NameDisplay;
