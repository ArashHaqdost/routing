import Link from 'next/link';

import Button from '../ui/Button';
import classes from '../../styles/events-itme.module.css';
import DateIcon from '../icons/Date-icon';
import AddressIcon from '../icons/Address-icon';
import ArrowRight from '../icons/Arrow-right';

function EvetnsItems(props) {

    const {title,date,location,image,id} = props;

    // change data format
    const humanReadable =  new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric',

    })

    //change lacation format in to readable

    const fromatedAddress = location.replace(',','\n');

const exploreLink = `/events/${id}`; 
  return (
    <div>
        <li className={classes.item}>
            <img src={'/'+image} alt='title' />
            <div className={classes.content}>
                <div className={classes.summary}>
                <h1>{title}</h1>

                </div>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadable}</time>
                </div>
                <div className={classes.address}>
                    <address>{fromatedAddress}</address>
                    <AddressIcon />
                </div>
                <div className={classes.action}>
                    <Button link={exploreLink}>
                        <span>Explore Deatiles </span>
                        <span className={classes.icon}><ArrowRight /></span>
                    </Button>
                </div>
            </div>
        </li>
    </div>
  )
}

export default EvetnsItems