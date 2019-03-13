import React from 'react'
import { object, func, node, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '14pt',
    color: '#e8eced',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      borderTop: '5px solid rgba(0,0,0,1)',
      borderBottom: '5px solid transparent'
    },
  },
  selected: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
}

const NavItem = ({ classes, children, history, to, onClick }) =>
  <li className={classes.root}>
    <Link
      onClick={onClick}
      to={to}
      className={classNames({
        [classes.link]: true,
        [classes.selected]: history.location.pathname === to
      })}
    >
      {children}
    </Link>
  </li>

NavItem.propTypes = {
  classes: object.isRequired,
  to: string.isRequired,
  children: node.isRequired,
  history: object.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(withRouter(NavItem))
