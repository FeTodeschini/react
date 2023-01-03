import ReactPropTypes from "prop-types"


const Button = ({color, text, onClick}) => {
    return (
        <button style={{backgroundColor: color}}
        className='btn'
        onClick={onClick}>
        {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.ReactPropTypes = {
    text: ReactPropTypes.string,
    color: ReactPropTypes.string,
    onClick: ReactPropTypes.func
}

export default Button