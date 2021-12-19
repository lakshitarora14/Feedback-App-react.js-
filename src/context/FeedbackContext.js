import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'

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
    const response = await fetch(`/feedback?sort=id_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  //delete feedback
  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, {
      method: 'DELETE',
    })
    setFeedback(feedback.filter((i) => i.id !== id))
  }

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()
    // id will be created automatically
    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
  }

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
