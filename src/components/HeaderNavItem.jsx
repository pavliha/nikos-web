import React from 'react'
import { object, func, node, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'

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

const HeaderNavItem = ({ classes, children, to, onClick }) => {

  const location = useLocation()
  const activeStyle = { [classes.selected]: location.pathname === to }

  return (
    <li className={classes.root}>
      <Link to={to} className={cn(classes.link, activeStyle)} onClick={onClick}>
        {children}
      </Link>
    </li>
  )
}

HeaderNavItem.propTypes = {
  classes: object.isRequired,
  to: string.isRequired,
  children: node.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(HeaderNavItem)
