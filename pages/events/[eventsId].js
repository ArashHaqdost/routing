import {useRouter} from 'next/router'

import {getEventById} from '../../dummy-data'
import { Fragment } from 'react';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import LogisticsItem from '../../components/event-detail/logistics-item';

function EvetnsDetails() {
  const  router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);
  console.log(event)
  if(!event){
    return(<h3>no Info</h3>)
  }
  return (
    <Fragment>
    <EventSummary title={event.title} />
    <EventLogistics 
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
    />
    <EventContent>
        <p>{event.description}</p>
    </EventContent>
</Fragment>
  )
}

export default EvetnsDetails