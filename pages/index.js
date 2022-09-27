import EvetnsList from '../components/events/Events-list'
import {getFeaturedEvents} from '../dummy-data'

function index(props) {
  return (
    <div>
      
      <EvetnsList items={getFeaturedEvents()} />
    
    </div>
  )
}

export default index