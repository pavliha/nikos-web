import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Headline from '../common/Headline'
import ServiceList from '../common/ServiceList'
import ListItem from '../common/ServiceList/ListItem'
import Service from '../common/Service'
import Services from '../common/Services'
import Title from '../common/Title'

const styles = {
  root: {},
}

const CelebrationPhoto = ({ classes }) =>
  <div className={classes.root}>
    <Headline>Фотосьёмка и видеосьёмка праздников</Headline>
    <Services>
      <Service>
        <Title>Фотосьёмка</Title>
        <ServiceList>
          <ListItem>Работа фотографа</ListItem>
          <ListItem>Дополнительное освещение (если необходимо)</ListItem>
          <ListItem>Обработка отснятого материала</ListItem>
          <ListItem>Обработка не менее 50 фотографий</ListItem>
          <ListItem>Индивидуальное оформление CD/DVD-диска с фотографиями.</ListItem>
        </ServiceList>
        <Typography variant="caption">
          все фотографии дублируются в сжатом варианте для записи на телефон или для удобного размещения в Интернет;
        </Typography>
      </Service>
      <Service>
        <Title>Видеосьёмка</Title>
        <ServiceList>
          <ListItem>Работа видеооператора</ListItem>
          <ListItem>Дополнительное освещение (если необходимо)</ListItem>
          <ListItem>Создание фильма, с использованием видеомонтажа</ListItem>
          <ListItem>Индивидуальное оформление дисков с фильмом качества Full HD</ListItem>
          <ListItem>Запись фильма в формате Full HD на любой носитель клиента</ListItem>
        </ServiceList>
      </Service>
      <Service>
        <Title>Все вместе</Title>
        <ServiceList>
          <ListItem>Работа фотографа</ListItem>
          <ListItem>Работа видеооператора</ListItem>
          <ListItem>Обработка не менее 50 фотографий</ListItem>
          <ListItem>Создание фильма, с использованием видеомонтажа</ListItem>
          <ListItem>Индивидуальное оформление дисков с фильмом качества Full HD + фото</ListItem>
          <ListItem>Запись фильма в формате Full HD и фото на любой носитель клиента</ListItem>
          <ListItem>Дополнительное освещение (если необходимо)</ListItem>
        </ServiceList>
      </Service>
    </Services>
  </div>

CelebrationPhoto.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(CelebrationPhoto)
