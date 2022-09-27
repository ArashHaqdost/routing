import { getAllEvents } from '../../dummy-data';
import EvetnsList from '../../components/events/Events-list';
import EventSearch from '../../components/events/EventSearch';
import { Fragment } from 'react';
import {useRouter} from 'next/router'
function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();


    function findHandlerEvent(month,year){
        const  fullpath = `/events/${year}/${month}`;
        router.push(fullpath)
    }
    return (
        <Fragment>
            <EventSearch onSearch={findHandlerEvent} />
            <EvetnsList items={events} />
        </Fragment>
    );
}

export default AllEventsPage;