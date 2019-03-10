import React from 'react'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Video from './Video'

const styles = {
  root: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    display: 'flex',
    padding: 40,
    height: 570,
  },
  slider: {
    width: 1000,
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
    maxWidth: 500,
  }
}

const VideosSection = ({ classes }) =>
  <section className={classes.root}>
    <div className={classes.description}>
      <div className={classes.articleSection}>
        <Typography variant="h3">Видеосъемка</Typography>
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
        <Button size="large" variant="outlined">СМОТРЕТЬ ВИДЕОКЛИПЫ</Button>
      </div>
    </div>
    <div className={classes.slider}>
      <Video id="PLG-S2eZcTE" />
    </div>

  </section>

VideosSection.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(VideosSection)
