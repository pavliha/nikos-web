import { Photo } from 'src/api/types';
import { State } from 'src/store/reducers';

export const selectPhotos = (state: State): Photo[] => state.photos;
