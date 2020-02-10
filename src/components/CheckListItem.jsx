import React from 'react'
import { object, string } from 'prop-types'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import CheckIcon from 'mdi-react/CheckIcon'

const styles = theme => ({
  icon: {
    color: theme.palette.success.main,
  }
})

const CheckListItem = ({ classes, children }) =>
  <ListItem>
    <ListItemIcon>
      <CheckIcon className={classes.icon} />
    </ListItemIcon>
    <ListItemText primary={children} />
  </ListItem>

CheckListItem.propTypes = {
  classes: object.isRequired,
  children: string.isRequired,
}

export default withStyles(styles)(CheckListItem)
