import api from 'src/api';
import { LoadAction, PayloadAction } from 'redux-load-middleware';
import { Photo } from 'src/api/types';
import { C } from '../constants';

export type LoadPhotosAction = LoadAction<C.LOAD_PHOTOS>;
export type LoadPhotosSuccessAction = PayloadAction<C.LOAD_PHOTOS_SUCCESS, Photo[]>;

export const loadPhotos = (): LoadPhotosAction => ({
  type: C.LOAD_PHOTOS,
  load: api.photos.loadMany()
});
