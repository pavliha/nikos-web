import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default (mapStateToProps, mapDispatchToProps) => (Component) => {

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      redux: {
        ...stateProps,
        ...dispatchProps,
      },
    }
  }

  const bindPropsToDispatch = dispatch =>
    Object.entries(mapDispatchToProps(dispatch))
      .reduce((accumulator, [key, value]) => ({
        ...accumulator,
        [key]: bindActionCreators(value, dispatch)
      }), {})

  return connect(mapStateToProps, bindPropsToDispatch, mergeProps)(Component)
}
