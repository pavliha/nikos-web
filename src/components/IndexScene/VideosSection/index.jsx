import React from 'react'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Video from './Video'

const styles = theme => ({
  root: {
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
      flexDirection: 'row',
    },

  },
  slider: {
    maxWidth: 1000,
    width: '100%',
    minHeight: 300,
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
    maxWidth: 500,
    marginTop: 25,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  }
})

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
      <Video id="-XTBhJh4rWI" />
    </div>
  </section>

VideosSection.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(VideosSection)
