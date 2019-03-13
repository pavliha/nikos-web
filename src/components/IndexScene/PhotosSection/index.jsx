import React from 'react'
import { array, object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import FotoramaSlider from './FotoramaSlider'
import Link from 'react-router-dom/es/Link'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 40,
    paddingBottom: 40,
    minHeight: 804,
  },

  slider: {
    width: '100%',
    maxWidth: 890,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1000,
    }
  },

  description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  hr: {
    margin: '20px 0',
    width: 50,
  },

  article: {
    paddingBottom: 25,
  },

  articleSection: {
    padding: 15,
    marginTop: 25,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
    maxWidth: 500,
  }
})

const PhotosSection = ({ classes, photos }) =>
  <section className={classes.root}>
    <div className={classes.slider}>
      <FotoramaSlider photos={photos} />
    </div>
    <div className={classes.description}>
      <div className={classes.articleSection}>
        <Typography variant="h3">Фотосъемка</Typography>
        <hr className={classes.hr} />
        <Typography variant="h6" component="article" className={classes.article}>
          Видеосъемкой занимаюсь давно и с увлечением.
          Здесь реализуются творческие замыслы, здесь
          безграничное поле для экспериментов, здесь
          можно проявить полет фантазии, постоянно
          находить новые решения и совершенствовать
          мастерство. При этом очень важно учитывать и
          пожелания клиентов, понимать их видение того
          или иного эпизода.
        </Typography>
        <Link to="/photos">
          <Button size="large" variant="outlined">СМОТРЕТЬ ФОТОГРАФИИ</Button>
        </Link>
      </div>
    </div>
  </section>

PhotosSection.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(PhotosSection)
