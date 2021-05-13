import axios from 'axios'

const Articles = {
  async get() {
    return await axios.get('/articles/');
  }
}

export default Articles