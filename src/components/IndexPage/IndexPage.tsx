import React, { FC, useEffect } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { loadPhotos, selectPhotos } from 'src/store/photos';
import PageLayout from '../PageLayout';
import Banner from './Banner';
import Fotorama from './Fotorama';
import Video from '../Video';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  contacts: {
    display: 'flex',
    padding: 40,
    height: 570,
    alignItems: 'center',
    justifyContent: 'center'
  },

  photosSection: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 40,
    paddingBottom: 40,
    minHeight: 804
  },

  slider: {
    width: '100%',
    maxWidth: 890,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1000
    }
  },

  description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },

  photoArticleSection: {
    padding: 15,
    marginTop: 25,
    [theme.breakpoints.up('md')]: {
      marginTop: 0
    },
    maxWidth: 500
  },

  videoSection: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    minHeight: 570,
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
      flexDirection: 'row'
    }
  },

  videoSlider: {
    maxWidth: 1000,
    width: '100%',
    minHeight: 300,
    margin: '0 24px'
  },

  hr: {
    margin: '20px 0',
    width: 50
  },

  article: {
    paddingBottom: 25
  },

  videoArticleSection: {
    padding: 15,
    maxWidth: 500,
    marginTop: 25,
    [theme.breakpoints.up('md')]: {
      marginTop: 0
    }
  }
}));

const IndexPage: FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const photos = useSelector(selectPhotos);

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <PageLayout transparentHeader>
      <main className={classes.root}>
        <Banner />
        <section id="PhotosSection" className={classes.photosSection}>
          <div className={classes.slider}>
            <Fotorama photos={photos} />
          </div>
          <div className={classes.description}>
            <div className={classes.photoArticleSection}>
              <Typography variant="h3">Фотосъемка</Typography>
              <hr className={classes.hr} />
              <Typography variant="h6" component="article" className={classes.article}>
                Первые фотографии, которые я сделал, были черно-белыми. Цветная фотография в то время была редкостью. С
                появлением цифрового фото появилась полная свобода в творчестве, связанная с техническими решениями.
                Цифровая обработка снимков дала возможность творить без оглядки на технологические ограничения. Сейчас
                фотография – это моя работа, мое хобби, мое желание творить…
              </Typography>
              <Link to="/photos">
                <Button size="large" variant="outlined">
                  СМОТРЕТЬ ФОТОГРАФИИ
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="VideoSection" className={classes.videoSection}>
          <div className={classes.description}>
            <div className={classes.videoArticleSection}>
              <Typography variant="h3">Видеосъемка</Typography>
              <hr className={classes.hr} />
              <Typography variant="h6" component="article" className={classes.article}>
                Видеосъемкой занимаюсь давно и с увлечением. Здесь реализуются творческие замыслы, здесь безграничное
                поле для экспериментов, здесь можно проявить полет фантазии, постоянно находить новые решения и
                совершенствовать мастерство. При этом очень важно учитывать и пожелания клиентов, понимать их видение
                того или иного эпизода.
              </Typography>
              <Link to="/video">
                <Button size="large" variant="outlined">
                  СМОТРЕТЬ ВИДЕОКЛИПЫ
                </Button>
              </Link>
            </div>
          </div>
          <div className={classes.videoSlider}>
            <Video id="-XTBhJh4rWI" />
          </div>
        </section>
        <section className={classes.contacts}>
          <div>
            <Typography gutterBottom variant="h3">
              КОНТАКТЫ
            </Typography>
            <Typography variant="h6">тел: +380970471609</Typography>
            <Typography variant="h6">email: nikos0669@gmail.com</Typography>
            <Typography variant="h6">instagram: Николай Костюк</Typography>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default IndexPage;
