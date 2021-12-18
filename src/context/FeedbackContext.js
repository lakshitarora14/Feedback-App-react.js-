import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// to get our components access to all the states and functions we will wrap everythinf inside a provider
// this is same like we wrap everything inside a router
// since we will be wrapping everything inside the provider it will take children as argument
export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?sort=id_order=desc`
    )
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

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
        isLoading,
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
