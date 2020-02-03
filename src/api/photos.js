import { http } from 'src/utils'

const photos = {

  async loadMany() {
    return http.get('/photos')
  },

}

export default photos
