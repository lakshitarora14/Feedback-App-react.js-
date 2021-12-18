import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// to get our components access to all the states and functions we will wrap everythinf inside a provider
// this is same like we wrap everything inside a router
// since we will be wrapping everything inside the provider it will take children as argument
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([{
    id: 1,
    text: 'This is the text 1',
    rating: 7,
  },
  {
    id: 2,
    text: 'This is the text 2',
    rating: 8,
  },
  {
    id: 3,
    text: 'This is the text 3',
    rating: 9,
  },
  {
    id: 4,
    text: 'This is the text 4',
    rating: 6,
  },
  {
    id: 5,
    text: 'This is the text 5',
    rating: 9,
  }
])
  
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((i) => i.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // any state or functions which we want to use will be passed inside value
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback
      }}
    >
      {/* this will contain all the components that will require access to our context */}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
