import { connect } from 'react-redux'

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

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
}
