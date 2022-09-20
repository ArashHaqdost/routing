import React, { Fragment } from 'react'
import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../dummy-data'
import EvetnsList from '../../components/events/Events-list';
import Button from '../../components/ui/Button';

function EvetnsSpecific() {
  const router = useRouter();
  const filterData= router.query.blog;

    if(!filterData){
      return <p className='center'>Loading...</p>
    }

    const filterYear = filterData[0];
    const  filterMoth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMoth;

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth > 12 ||
      numMonth < 1
    ){
      return(
         <Fragment>
           <p>Not Valid Endter Valid filter </p>
           <div className='center'>
            <Button link='/events'>Show All events</Button>
           </div>
        
         </Fragment>
)    }

    const filteredEvents = getFilteredEvents({
      year:numYear,
      month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length===0){
      return (
        <Fragment>
          <p>NO evetn found for the  chosen filted</p>
          <div className='center'>
           <Button link='/events'>Show All events</Button>
          </div>
       
        </Fragment>
)  
    }
  return (
    <div><EvetnsList items={filteredEvents} /></div>
  )
}

export default EvetnsSpecific