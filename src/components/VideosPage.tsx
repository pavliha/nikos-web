import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import Video from './Video';
import PageLayout from './PageLayout';

const useStyles = makeStyles({
  root: {
    margin: '40px auto',
    maxWidth: 1100,
    padding: 15,
    minHeight: '85vh'
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  box: {
    marginTop: 25
  }
});

const VideosScene: FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <PageLayout className={classes.root}>
      <section className={classes.box}>
        <Video id="kktVTzOlpac" />
      </section>
      <section className={classes.box}>
        <Video id="qJE80N2-p-I" />
      </section>
      <section className={classes.box}>
        <Video id="mG1TwzVuJXY" />
      </section>
    </PageLayout>
  );
};

export default VideosScene;
