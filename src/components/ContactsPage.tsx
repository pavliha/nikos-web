import React, { FC } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import PageLayout from './PageLayout';

const useStyles = makeStyles({
  root: {
    height: '94vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contacts: {
    display: 'flex',
    padding: 40,
    height: 570,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ContactsScene: FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <PageLayout className={classes.root}>
      <div className={classes.contacts}>
        <div>
          <Typography gutterBottom variant="h3">
            КОНТАКТЫ
          </Typography>
          <Typography variant="h6">тел: +380970471609</Typography>
          <Typography variant="h6">email: nikos0669@gmail.com</Typography>
          <Typography variant="h6">instagram: Николай Костюк</Typography>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactsScene;
