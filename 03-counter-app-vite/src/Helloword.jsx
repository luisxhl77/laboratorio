import PropTypes from 'prop-types';
import { FirstApp } from "./FirstApp";

export const Helloword = ({title, name}) => {
  return (
    <>
        <h1>{title}</h1>
        <h2>hola soy {name}</h2>
    </>
  )
}

Helloword.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
Helloword.defaultProps = {
  title: 'none',
  name: 'none'
}