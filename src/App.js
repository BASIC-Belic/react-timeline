import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';

import Timeline from './components/Timeline';

// const person = timelineData.person;

const parseData = timelineData.events.map( (event, i) => {
  return <TimelineEvent key={i} person={event.person} status={event.status} time={event.timeStamp}/>
});

class App extends Component {

  render() {
    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}s Blog</h1>
        </header>
        <main className="App-main">
          <Timeline events={timelineData.events}/>
        </main>
      </div>
    );
  }
}

export default App;
