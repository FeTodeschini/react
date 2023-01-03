import ReactPropTypes from "prop-types"
import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text= {showAdd ? 'Close' : 'Add'} 
                color = {showAdd ? 'red' : 'blue'} 
                onClick={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.ReactPropTypes = {
    title: ReactPropTypes.string
}
export default Header