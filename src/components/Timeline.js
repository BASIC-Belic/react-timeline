import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // Fill in your code here

  const parseData = props.events.map( (event, i) => {
    return <TimelineEvent key={i} person={event.person} status={event.status} time={event.timeStamp}/>
  });

  return (
    <section className="timeline">
      {parseData}
    </section>
  );
}

export default Timeline;
