import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
// to use context we need to import these two things i.e. useContext hook and the context we created
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete }) {
  // we can extract whatever we want from our context by using our useContext hook and passing out context
  // here we have access to anything which is there in the value of Context
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) return <p1>No feedback yet</p1>

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  //   return (
  //     <div className='feedback-list'>
  //       {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete} />
  //       ))}
  //     </div>
  //   )
}
// we do not need this now since we are using context 
// FeedbackList.propTypes = {
//   // feedback: PropTypes.array.isRequired,
//   // we can also set shape i.e. what should be included in the object in the array
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }
export default FeedbackList
