import Header from './components/Header'
// import { useState } from 'react'
// import FeedbackData from './components/data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
// since we are not directly exporting a component i.e. we are not exporting Feedback context but a function
// inside of it so we are using here the curly braces
import { FeedbackProvider } from './context/FeedbackContext'
// import FeedbackContext from './context/FeedbackContext'

function App() {
  //in App.js we can set global state, here also same as component level state we just need to import usState Hook
  // and since we are passing it as props in new file so just use it there by destructuring it
  // const [feedback, setFeedback] = useState(FeedbackData)
  // we do not need it now since we are using context API

  return (
    // everything is surrounded inside a provider
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
