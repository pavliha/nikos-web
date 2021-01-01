import { Photo } from 'src/api/types';
import { C } from '../constants';
import { LoadPhotosSuccessAction } from './actions';

export const photosReducer = (state: Photo[] = [], action: LoadPhotosSuccessAction): Photo[] => {
  switch (action.type) {
    case C.LOAD_PHOTOS_SUCCESS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
