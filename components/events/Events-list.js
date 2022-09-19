import React from 'react'
import EvetnsItems from './Events-itme';
import  classes from '../../styles/events-list.module.css'

function EvetnsList(props) {
    const {items} = props;
  return (<ul className={classes.list}>
    {items.map((event)=>(
    <EvetnsItems
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            image={event.image}
            />
            ))}
  </ul> )   
}

export default EvetnsList