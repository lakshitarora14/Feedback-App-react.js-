// to make this component _rfce + (tab)
// impt + (tab) to insert this line
import PropTypes from 'prop-types'
// we can destructure the props using { }
// otherwise we would have gotten props inside the Header(props)
// then for accessing text we would have used props.text
function Header({ text, bgcolor, textColor }) {
  // we can pass props as CSS also
  const style = { backgroundColor: bgcolor, color: textColor }
  return (
    // to add css use double curly braces and to give inline property give them as comma seperated values
    // if some property has dash in it then in jsx file we need to give it as camelcase
    // <header style={{ backgroundColor: 'blue', color: 'red' }}>
    // or we can put it in a variable and then insert it so in this case only one curly brace required
    <header style={style}>
      <div className='className'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

//If props are expected but it is not passed then in that case we can use this
Header.defaultProps = {
  text: 'Feedback UI',
  bgcolor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

// type checking for props i.e. to check of the props are numbers or strings etc
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
