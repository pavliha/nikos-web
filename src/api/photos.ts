import http from './http';
import { Photo } from './types';

const photos = {
  loadMany(): Promise<Photo[]> {
    return http.get('/photos');
  }
};

export default photos;
