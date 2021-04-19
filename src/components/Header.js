import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {
    const onClick = () =>{
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
           <Button color='green' onClick={onClick} text='Create'/>
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/* CSS in JS
const headingStyle = {
    color:'red',
    backgroundColor:'black'
} */

export default Header