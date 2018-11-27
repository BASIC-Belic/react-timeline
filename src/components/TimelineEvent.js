import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

// TimelineEvent - This component will take an individual timeline event data and render it. Each TimelineEvent will contain a person who posted the event, a status message and a timestamp. You will need to use the Timestamp component inside this component.


// Test the component by rendering it with hardcoded data inside the App component. TimelineEvent should use the existing Timestamp component to render the time & date of the event.

const TimelineEvent = (props) => {

  // Fill in your code here
  return (
    <section className="timeline-event">
      <div className="event-person">{props.person}</div>
      <div className="event-status">{props.status}</div>
      <div className="event-time">{<Timestamp time={props.timeStamp}/>}</div>
    </section>
  )
}

export default TimelineEvent;
