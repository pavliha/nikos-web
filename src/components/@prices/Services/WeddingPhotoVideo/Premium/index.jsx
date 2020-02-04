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
      <ListItem>Два дня</ListItem>
      <ListItem>700 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото</ListItem>
      <ListItem>Запись Full HD видео и фото на любой другой носитель клиента</ListItem>
      <ListItem>Короткие видеоклипы "Невеста", "Прогулка"</ListItem>
      <ListItem>Свадебный клип</ListItem>
    </ServiceList>
  </Service>

Premium.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Premium)
