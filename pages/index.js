import EvetnsList from '../components/events/Events-list'
import {getFeaturedEvents} from '../dummy-data'
function index() {
  return (
    <div>
      <h1>Main page</h1>
      <EvetnsList items={getFeaturedEvents()} />
    
    </div>
  )
}

export default index