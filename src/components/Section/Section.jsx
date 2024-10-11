import PropTypes from 'prop-types'

const Section = ({ children, style }) => {
  return <div style={style}>{children}</div>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}

Section.defaultProps = {
  style: {},
}

export default Section
