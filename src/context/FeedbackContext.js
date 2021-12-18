import { createContext, useState } from 'react'

const FeedbackContext = createContext()

// to get our components access to all the states and functions we will wrap everythinf inside a provider
// this is same like we wrap everything inside a router
// since we will be wrapping everything inside the provider it will take children as argument
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([{
    id: 1,
    text: 'This is the sample',
    rating: 7,
  }])
  // any state or functions which we want to use will be passed inside value
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {/* this will contain all the components that will require access to our context */}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
