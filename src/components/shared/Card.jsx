import PropTypes from 'prop-types'
// to get what is inside a component, we have passed it as props in the Feedback Item component
function Card({ children, reverse }) {
  //   CONDITIONAL CLASS
  return (
    // we want the class card to always be there so we can put card class inside backQuotes
    // but reverse is conditional so we can put it inside ${}
    // if reverse is true then we also want reverse class applied
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
  //   //CONDITIONAL STYLE
  //   return (
  //     //If we want to set conditional style then we can do inline conditional styling via style
  //     <div className='card'>
  //       {children} style=
  //       {{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //         color: reverse ? '#fff' : '#000'
  //       }}
  //     </div>
  //   )
  // }
}

Card.defaultProps = {
  reverse: false,
}
// here children is a node and reverse is a boolean
// In Card.propTypes the p is small, and in children the P is capital
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
