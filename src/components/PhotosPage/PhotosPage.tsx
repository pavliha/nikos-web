import React, { FC, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { makeStyles, Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos, selectPhotos } from 'src/store/photos';
import { Photo } from 'src/api/types';
import { RouteComponentProps } from '@reach/router';
import PhotosGrid from './PhotosGrid';
import PageLayout from '../PageLayout';

const useStyles = makeStyles({
  root: {
    maxWidth: 1270,
    margin: '62px auto'
  },

  photo: {
    cursor: 'pointer',
    maxWidth: '100%'
  }
});

const PhotosScene: FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <PageLayout className={classes.root}>
      {!isEmpty(photos) && <PhotosGrid photos={photos} onSelect={setPhoto} />}
      <Modal open={!!photo} onClose={() => setPhoto(null)} className={classes.root}>
        <div style={{ width: photo?.isPortrait ? '600px' : '1300px' }}>
          <img onClick={() => setPhoto(null)} className={classes.photo} alt={photo?.title} src={photo?.url} />
        </div>
      </Modal>
    </PageLayout>
  );
};

export default PhotosScene;
