import React, { FC } from 'react';
import { Typography, List, makeStyles, Theme } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import CheckListItem from './CheckListItem';
import PageLayout from '../PageLayout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '20px auto',
    maxWidth: 1100,
    padding: 15
  },

  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },

  info: {
    marginTop: 40,
    border: '1px #dadce0 solid',
    borderRadius: 5,
    padding: 30
  },

  budgetColor: {
    color: theme.palette.error.main
  },

  regularColor: {
    color: theme.palette.warning.main
  },

  premiumColor: {
    color: theme.palette.success.main
  },

  services: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  service: {
    marginTop: 20,
    width: 350,
    border: '1px #dadce0 solid',
    borderRadius: 5,
    textAlign: 'center'
  },

  title: {
    paddingTop: 30
  },

  description: {
    marginTop: 15
  },

  headline: {
    marginTop: 50
  }
}));

const PricesScene: FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <PageLayout className={classes.root}>
      <section id="Info" className={classes.info}>
        <Typography>
          На всех мероприятиях мы работаем всегда вдвоем: видеооператор и фотограф. Приезжаем на своем автомобиле,
          который потом используется для производства видеосъемки. Все необходимое оборудование (освещение реквизит
          фотографа и т. п.), возим с собой.
        </Typography>
        <br />
        <Typography>
          Стоимость горючего, потраченного в ходе видео - фотосъемки свадьбы оплачивается отдельно.
        </Typography>
        <br />
        <Typography>
          Если ни один из предложенный вариантов не соответствует вашим пожеланиям - предложите свой, и мы обсудим его
          стоимость. Дата съемки бронируется внесением аванса — 30% от стоимости выбранного пакета.
        </Typography>
      </section>
      <section id="WeddingPhotoVideo">
        <Typography variant="h4" className={classes.headline}>
          Всё вместе: фотосъемка и видеосъемка свадьбы
        </Typography>
        <main className={classes.services}>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.budgetColor}>Эконом</span>»
            </Typography>
            <List>
              <CheckListItem>Съемочный день – до банкета</CheckListItem>
              <CheckListItem>300 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото)</CheckListItem>
              <CheckListItem>Запись Full HD видео и фото на любой другой носитель клиента</CheckListItem>
              <CheckListItem>Короткие видеоклипы "Невеста", "Прогулка"</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.regularColor}>Стандарт</span>»
            </Typography>
            <List>
              <CheckListItem>Полный день</CheckListItem>
              <CheckListItem>500 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото)</CheckListItem>
              <CheckListItem>Запись Full HD видео и фото на любой другой носитель клиента</CheckListItem>
              <CheckListItem>Короткие видеоклипы "Невеста", "Прогулка"</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
            </Typography>
            <List>
              <CheckListItem>Два дня</CheckListItem>
              <CheckListItem>700 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото</CheckListItem>
              <CheckListItem>Запись Full HD видео и фото на любой другой носитель клиента</CheckListItem>
              <CheckListItem>Короткие видеоклипы "Невеста", "Прогулка"</CheckListItem>
              <CheckListItem>Свадебный клип</CheckListItem>
            </List>
          </section>
        </main>
        <Typography variant="caption" className={classes.description}>
          Длительность свадебной видео съемки — зависит от тарифа. Репортажная и постановочная видео и фотосъемка
          (съемка видеоклипов: «Невеста», «Прогулка» и т. п.). Видео и фотосъемка производится с утра (сборы невесты и
          жениха) и до конца банкета. Клиент получает индивидуально оформленный комплект дисков с качеством видео Full
          HD + фото, также фильм и фото записываются на любой другой носитель клиента. За дополнительную плату, перед
          свадьбой также снимается видеоклип «История любви».
        </Typography>
      </section>
      <section id="WeddingPhoto">
        <Typography variant="h4" className={classes.headline}>
          Фотосьемка свадьбы
        </Typography>
        <main className={classes.services}>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.budgetColor}>Эконом</span>»
            </Typography>
            <List>
              <CheckListItem>ЗАГС и маленькая прогулка</CheckListItem>
              <CheckListItem>100 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный DVD-диск</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.regularColor}>Стандарт</span>»
            </Typography>
            <List>
              <CheckListItem>До банкета</CheckListItem>
              <CheckListItem>300 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный DVD-диск</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
            </Typography>
            <List>
              <CheckListItem>Полный день</CheckListItem>
              <CheckListItem>500 обработаных фотографий</CheckListItem>
              <CheckListItem>Индивидуально оформленный DVD-диск</CheckListItem>
            </List>
          </section>
        </main>
        <Typography variant="caption" className={classes.description}>
          Длительность свадебной съемки — завист от тарифа. Репортажная и постановочная фотосъёмка с утренних сборов и
          до конца банкета. Выездная фотосессия (место для фотосессии предварительно согласовывается с клиентом). Клиент
          получает индивидуально оформленный DVD-диск с фотографиями. Все фотографии проходят RAW-конвертацию,
          цветокоррекцию, обрезку, ретуширование, художественную обработку (изменение цветовой гаммы, черно-белый
          вариант и т.п.)
        </Typography>
      </section>
      <section id="WeddingVideo">
        <Typography variant="h4" className={classes.headline}>
          Видеосьемка свадьбы
        </Typography>
        <main className={classes.services}>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.budgetColor}>Эконом</span>»
            </Typography>
            <List>
              <CheckListItem>До банкета</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD)</CheckListItem>
              <CheckListItem>Запись Full HD видео на любой другой носитель клиента</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет
              <br /> «<span className={classes.regularColor}>Стандарт</span>»
            </Typography>
            <List>
              <CheckListItem>Полный день</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект DVD-дисков</CheckListItem>
              <CheckListItem>Запись Full HD видео на любой носитель</CheckListItem>
              <CheckListItem>Короткие видеоклипы "невеста", "прогулка"</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Пакет <br /> «<span className={classes.premiumColor}>Максимальный</span>»
            </Typography>
            <List>
              <CheckListItem>2 дня</CheckListItem>
              <CheckListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD)</CheckListItem>
              <CheckListItem>Запись Full HD видео на любой другой носитель клиента</CheckListItem>
              <CheckListItem>Короткие видеоклипы "Невеста", "Прогулка"</CheckListItem>
            </List>
          </section>
        </main>
        <Typography variant="caption" className={classes.description}>
          Длительность свадебной видео съемки — зависит от тарифа. Репортажная и постановочная видеосъемка (съемка
          видеоклипов: «Невеста», «Прогулка» и т. п.). Видеосъемка производится с утра (сборы невесты и жениха) и до
          конца банкета. Клиент получает индивидуально оформленный комплект дисков с качеством видео Full HD, также
          фильм записывается в формате Full HD на любой другой носитель клиента. За дополнительную плату, перед свадьбой
          также снимается видеоклип «История любви».
        </Typography>
      </section>
      <section id="CelebrationPhoto">
        <Typography variant="h4" className={classes.headline}>
          Фотосьёмка и видеосьёмка праздников
        </Typography>
        <main className={classes.services}>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Фотосьёмка
            </Typography>
            <List>
              <CheckListItem>Работа фотографа</CheckListItem>
              <CheckListItem>Дополнительное освещение (если необходимо)</CheckListItem>
              <CheckListItem>Обработка отснятого материала</CheckListItem>
              <CheckListItem>Обработка не менее 50 фотографий</CheckListItem>
              <CheckListItem>Индивидуальное оформление CD/DVD-диска с фотографиями.</CheckListItem>
            </List>
            <Typography variant="caption">
              все фотографии дублируются в сжатом варианте для записи на телефон или для удобного размещения в Интернет;
            </Typography>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Видеосьёмка
            </Typography>
            <List>
              <CheckListItem>Работа видеооператора</CheckListItem>
              <CheckListItem>Дополнительное освещение (если необходимо)</CheckListItem>
              <CheckListItem>Создание фильма, с использованием видеомонтажа</CheckListItem>
              <CheckListItem>Индивидуальное оформление дисков с фильмом качества Full HD</CheckListItem>
              <CheckListItem>Запись фильма в формате Full HD на любой носитель клиента</CheckListItem>
            </List>
          </section>
          <section className={classes.service}>
            <Typography className={classes.title} variant="h5">
              Все вместе
            </Typography>
            <List>
              <CheckListItem>Работа фотографа</CheckListItem>
              <CheckListItem>Работа видеооператора</CheckListItem>
              <CheckListItem>Обработка не менее 50 фотографий</CheckListItem>
              <CheckListItem>Создание фильма, с использованием видеомонтажа</CheckListItem>
              <CheckListItem>Индивидуальное оформление дисков с фильмом качества Full HD + фото</CheckListItem>
              <CheckListItem>Запись фильма в формате Full HD и фото на любой носитель клиента</CheckListItem>
              <CheckListItem>Дополнительное освещение (если необходимо)</CheckListItem>
            </List>
          </section>
        </main>
      </section>
    </PageLayout>
  );
};

export default PricesScene;
