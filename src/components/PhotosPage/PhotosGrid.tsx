import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import PhotosGridItem from './PhotosGridItem';
import { Photo } from '../../api/types';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 372px);',
    gridAutoRows: '247px',
    justifyContent: 'center',
    gridGap: '3px'
  }
});

interface Props {
  photos: Photo[];
  onSelect: (photo: Photo) => void;
}
const PhotosGrid: FC<Props> = ({ photos, onSelect }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {photos.map((photo: Photo) => (
        <PhotosGridItem key={photo.id} photo={photo} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default PhotosGrid;
