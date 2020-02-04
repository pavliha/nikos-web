/* eslint-disable import/no-duplicates */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from '../../common/Title'
import Service from '../../common/Service'
import ServiceList from '../../common/ServiceList'
import ListItem from '../../common/ServiceList/ListItem'

const styles = theme => ({
  color: {
    color: theme.palette.success.main
  },
})

const Premium = ({ classes }) =>
  <Service>
    <Title>
      Пакет <br /> «<span className={classes.color}>Максимальный</span>»
    </Title>
    <ServiceList>
      <ListItem>Полный день</ListItem>
      <ListItem>500 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный DVD-диск</ListItem>
    </ServiceList>
  </Service>

Premium.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Premium)
