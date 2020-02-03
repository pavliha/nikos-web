import React from 'react'
import { object } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import {
  ServiceHeadline,
  ServiceList,
  ServiceListItem,
  ServiceContainer,
  ServicesContainer,
  ServiceTitle,
  ServiceDescription
} from 'src/components'

const styles = theme => ({
  root: {
    margin: '20px auto',
    maxWidth: 1100,
    padding: 15,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  info: {
    marginTop: 40,
    border: '1px #dadce0 solid',
    borderRadius: 5,
    padding: 30,
  },
  budgetColor: {
    color: theme.palette.error.main
  },
  regularColor: {
    color: theme.palette.warning.main
  },
  premiumColor: {
    color: theme.palette.success.main
  }
})

const PricesScene = ({ classes }) =>
  <div className={classes.root}>
    <section className={classes.info}>
      <Typography>
        На всех мероприятиях мы работаем всегда вдвоем: видеооператор и фотограф. Приезжаем на своем автомобиле, который
        потом используется для производства видеосъемки. Все необходимое оборудование (освещение реквизит фотографа и т.
        п.), возим с собой.
      </Typography>
      <br />
      <Typography color="success">
        Стоимость горючего, потраченного в ходе видео - фотосъемки свадьбы оплачивается отдельно.
      </Typography>
      <br />
      <Typography>
        Если ни один из предложенный вариантов не соответствует вашим пожеланиям - предложите свой, и мы обсудим его
        стоимость. Дата съемки бронируется внесением аванса — 30% от стоимости выбранного пакета.
      </Typography>
    </section>
    <section id="WeddingPhotoVideo">
      <ServiceHeadline>Всё вместе: фотосъемка и видеосъемка свадьбы</ServiceHeadline>
      <ServicesContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.budgetColor}>Эконом</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>Съемочный день – до банкета</ServiceListItem>
            <ServiceListItem>300 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD +
              фото)</ServiceListItem>
            <ServiceListItem>Запись Full HD видео и фото на любой другой носитель клиента</ServiceListItem>
            <ServiceListItem>Короткие видеоклипы "Невеста", "Прогулка"</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.regularColor}>Стандарт</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>Полный день</ServiceListItem>
            <ServiceListItem>500 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD +
              фото)</ServiceListItem>
            <ServiceListItem>Запись Full HD видео и фото на любой другой носитель клиента</ServiceListItem>
            <ServiceListItem>Короткие видеоклипы "Невеста", "Прогулка"</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>Два дня</ServiceListItem>
            <ServiceListItem>700 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото</ServiceListItem>
            <ServiceListItem>Запись Full HD видео и фото на любой другой носитель клиента</ServiceListItem>
            <ServiceListItem>Короткие видеоклипы "Невеста", "Прогулка"</ServiceListItem>
            <ServiceListItem>Свадебный клип</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
      </ServicesContainer>
      <ServiceDescription>
        Длительность свадебной видео съемки — зависит от тарифа. Репортажная и постановочная видео и фотосъемка (съемка
        видеоклипов: «Невеста», «Прогулка» и т. п.). Видео и фотосъемка производится с утра (сборы невесты и жениха) и
        до
        конца банкета. Клиент получает индивидуально оформленный комплект дисков с качеством видео Full HD + фото, также
        фильм и фото записываются на любой другой носитель клиента. За дополнительную плату, перед свадьбой также
        снимается видеоклип «История любви».
      </ServiceDescription>
    </section>
    <section id="WeddingPhoto">
      <ServiceHeadline>Фотосьемка свадьбы</ServiceHeadline>
      <ServicesContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.budgetColor}>Эконом</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>ЗАГС и маленькая прогулка</ServiceListItem>
            <ServiceListItem>100 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный DVD-диск</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.regularColor}>Стандарт</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>До банкета</ServiceListItem>
            <ServiceListItem>300 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный DVD-диск</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>Полный день</ServiceListItem>
            <ServiceListItem>500 обработаных фотографий</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный DVD-диск</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
      </ServicesContainer>
      <ServiceDescription>
        Длительность свадебной съемки — завист от тарифа. Репортажная и постановочная фотосъёмка с утренних сборов и до
        конца
        банкета. Выездная фотосессия (место для фотосессии предварительно согласовывается с клиентом). Клиент получает
        индивидуально оформленный DVD-диск с фотографиями. Все фотографии проходят RAW-конвертацию,
        цветокоррекцию, обрезку, ретуширование, художественную обработку (изменение цветовой гаммы, черно-белый вариант
        и
        т.п.)
      </ServiceDescription>
    </section>
    <section id="WeddingVideo">
      <ServiceHeadline>Видеосьемка свадьбы</ServiceHeadline>
      <ServicesContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.budgetColor}>Эконом</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>До банкета</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD)</ServiceListItem>
            <ServiceListItem>Запись Full HD видео на любой другой носитель клиента</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет<br /> «<span className={classes.regularColor}>Стандарт</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>Полный день</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект DVD-дисков</ServiceListItem>
            <ServiceListItem>Запись Full HD видео на любой носитель</ServiceListItem>
            <ServiceListItem>Короткие видеоклипы "невеста", "прогулка"</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>
            Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
          </ServiceTitle>
          <ServiceList>
            <ServiceListItem>2 дня</ServiceListItem>
            <ServiceListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD)</ServiceListItem>
            <ServiceListItem>Запись Full HD видео на любой другой носитель клиента</ServiceListItem>
            <ServiceListItem>Короткие видеоклипы "Невеста", "Прогулка"</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
      </ServicesContainer>
      <ServiceDescription>
        Длительность свадебной видео съемки — зависит от тарифа. Репортажная и постановочная видеосъемка (съемка
        видеоклипов: «Невеста», «Прогулка» и т. п.). Видеосъемка производится с утра (сборы невесты и жениха) и до конца
        банкета. Клиент получает индивидуально оформленный комплект дисков с качеством видео Full HD, также фильм
        записывается в формате Full HD на любой другой носитель клиента. За дополнительную плату, перед свадьбой также
        снимается видеоклип «История любви».
      </ServiceDescription>
    </section>
    <section id="CelebrationPhoto">
      <ServiceHeadline>Фотосьёмка и видеосьёмка праздников</ServiceHeadline>
      <ServicesContainer>
        <ServiceContainer>
          <ServiceTitle>Фотосьёмка</ServiceTitle>
          <ServiceList>
            <ServiceListItem>Работа фотографа</ServiceListItem>
            <ServiceListItem>Дополнительное освещение (если необходимо)</ServiceListItem>
            <ServiceListItem>Обработка отснятого материала</ServiceListItem>
            <ServiceListItem>Обработка не менее 50 фотографий</ServiceListItem>
            <ServiceListItem>Индивидуальное оформление CD/DVD-диска с фотографиями.</ServiceListItem>
          </ServiceList>
          <Typography variant="caption">
            все фотографии дублируются в сжатом варианте для записи на телефон или для удобного размещения в Интернет;
          </Typography>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>Видеосьёмка</ServiceTitle>
          <ServiceList>
            <ServiceListItem>Работа видеооператора</ServiceListItem>
            <ServiceListItem>Дополнительное освещение (если необходимо)</ServiceListItem>
            <ServiceListItem>Создание фильма, с использованием видеомонтажа</ServiceListItem>
            <ServiceListItem>Индивидуальное оформление дисков с фильмом качества Full HD</ServiceListItem>
            <ServiceListItem>Запись фильма в формате Full HD на любой носитель клиента</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceTitle>Все вместе</ServiceTitle>
          <ServiceList>
            <ServiceListItem>Работа фотографа</ServiceListItem>
            <ServiceListItem>Работа видеооператора</ServiceListItem>
            <ServiceListItem>Обработка не менее 50 фотографий</ServiceListItem>
            <ServiceListItem>Создание фильма, с использованием видеомонтажа</ServiceListItem>
            <ServiceListItem>Индивидуальное оформление дисков с фильмом качества Full HD + фото</ServiceListItem>
            <ServiceListItem>Запись фильма в формате Full HD и фото на любой носитель клиента</ServiceListItem>
            <ServiceListItem>Дополнительное освещение (если необходимо)</ServiceListItem>
          </ServiceList>
        </ServiceContainer>
      </ServicesContainer>
    </section>
  </div>

PricesScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PricesScene)
