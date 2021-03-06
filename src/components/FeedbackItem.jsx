import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
//to use state hooks we need to import this, hooks start with use
// import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
function FeedbackItem({ item }) {
  // states are immutable i.e. they need a set function to change values
  // they also have a parameter to use default value
  //   const [text, setText] = useState('This is initial/default text')
  //   const [rating, setRating] = useState(7)

  // accessing delete function from context api
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    //   reverse is the prop we set for reverse styling through which we will do conditional styling, we are taking default value for now
    <Card>
      {/* these are the children of the cards we can pass these as props and it will be displayed inside card component */}
      <div className='num-display'>{item.rating}</div>
      {/* to pass anything inside a function and to use it somewhere else
      for example in this case we use in above function, we catch the id there */}
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
