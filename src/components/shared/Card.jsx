import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div className="card" style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.3)' : 'green',
      color: reverse ? '#fff' : '#000'
    }}>{children}</div>
  )
}
Card.defaultProps = {
  reverse:true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse:PropTypes.bool
}

export default Card