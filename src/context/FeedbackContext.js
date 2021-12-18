import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// to get our components access to all the states and functions we will wrap everythinf inside a provider
// this is same like we wrap everything inside a router
// since we will be wrapping everything inside the provider it will take children as argument
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
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
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //delete feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((i) => i.id !== id))
  }

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
  }
  // any state or functions which we want to use will be passed inside value
  // editFeedback -> function
  // feedbackEdit -> object
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {/* this will contain all the components that will require access to our context */}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
