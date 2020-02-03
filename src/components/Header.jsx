import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import NavItem from './HeaderNavItem'
import MenuIcon from 'mdi-react/MenuIcon'
import CloseIcon from 'mdi-react/CloseIcon'

const styles = (theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'all .2s ease-out 0.1s',
    minHeight: 60,
  },
  list: {
    flexGrow: 1,
    display: 'none',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    listStyle: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    }
  },
  iconButton: {
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    padding: 20,
    color: 'white'
  }
})

class Header extends Component {

  constructor(props) {
    super(props)
    const { pathname } = props

    this.state = {
      color: pathname === '/' ? 'transparent' : 'rgba(0,0,0,0.7)',
      isExpanded: false,
    }

  }

  componentWillUpdate(props) {

    if (this.props.pathname === props.pathname) return

    this.setState({ color: props.pathname === '/' ? 'transparent' : 'rgba(0,0,0,0.7)' })
  }

  componentDidMount() {
    this.setState({ isMounted: true })
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  listenScrollEvent = () => {
    const { pathname } = this.props
    if (pathname !== '/') return

    if (window.scrollY > 400) {
      this.setState({ color: 'rgba(0,0,0,0.7)' })
    } else {
      this.setState({ color: 'transparent' })
    }
  }

  closeMenu = () =>
    this.setState({ isExpanded: false, })

  expandMenu = () =>
    this.setState({ isExpanded: true })

  render() {
    const { classes } = this.props
    const { color, isExpanded } = this.state

    return (
      <nav className={classes.root} style={{ backgroundColor: color }}>
        <ul
          className={classes.list}
          style={{
            display: isExpanded ? 'flex' : undefined,
            backgroundColor: isExpanded ? 'rgba(0,0,0,0.7)' : color,
          }}>
          <NavItem onClick={this.closeMenu} to="/">ГЛАВНАЯ</NavItem>
          <NavItem onClick={this.closeMenu} to="/photos">ФОТОГАЛЕРЕЯ</NavItem>
          <NavItem onClick={this.closeMenu} to="/video">ОБРАЗЦЫ ВИДЕО</NavItem>
          <NavItem onClick={this.closeMenu} to="/prices">ЦЕНЫ И УСЛУГИ</NavItem>
          <NavItem onClick={this.closeMenu} to="/contacts">КОНТАКТЫ</NavItem>
        </ul>

        {!isExpanded && (
          <IconButton
            onClick={this.expandMenu}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
        )}

        {isExpanded && (
          <IconButton
            onClick={this.closeMenu}
            className={classes.iconButton}
          >
            <CloseIcon />
          </IconButton>
        )}
      </nav>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  pathname: string.isRequired,
}

export default withStyles(styles)(Header)
