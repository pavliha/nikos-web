/* eslint-disable import/no-duplicates */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from '../../common/Title'
import ServiceList from '../../common/ServiceList'
import ListItem from '../../common/ServiceList/ListItem'
import Service from '../../common/Service'

const styles = theme => ({
  color: {
    color: theme.palette.warning.main
  },
})

const Regular = ({ classes }) =>
  <Service>
    <Title>
      Пакет<br /> «<span className={classes.color}>Стандарт</span>»
    </Title>
    <ServiceList>
      <ListItem>Полный день</ListItem>
      <ListItem>500 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото)</ListItem>
      <ListItem>Запись Full HD видео и фото на любой другой носитель клиента</ListItem>
      <ListItem>Короткие видеоклипы "Невеста", "Прогулка"</ListItem>
    </ServiceList>
  </Service>

Regular.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Regular)
