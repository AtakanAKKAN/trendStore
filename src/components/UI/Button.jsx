/* eslint-disable react/prop-types */
import "./Button.css"

const Button = (props) => {
  return (
    <button className={`button-3 ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button