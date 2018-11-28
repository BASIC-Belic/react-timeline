import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

class Timeline extends React.Component {

  constructor(props) {
    super(props);
  }
  getEventsData() {
    const eventsData = this.props.events.map( (event, i) => {
      return <TimelineEvent key={i} person={event.person} status={event.status} time={event.timeStamp}/>
    });
    return eventsData;
  }
  render() {
    const eventsData = this.getEventsData();

    return (
      <section className="timeline">
        {eventsData}
      </section>
    );
  }
}

Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;
