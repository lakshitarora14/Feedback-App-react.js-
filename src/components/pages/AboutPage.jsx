import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <h1>About page</h1>
      <h3>This is a react app for recording feedback</h3>
      <p>Version v-1.0</p>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
