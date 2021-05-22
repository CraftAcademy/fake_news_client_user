import axios from 'axios';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler';

const BackyardArticles = {
  async index() {
    try {
      let response = await axios.get('/backyard');
      store.dispatch({
        type: 'SET_BACKYARD_ARTICLES',
        payload: response.data.backyardArticles,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

export default BackyardArticles;
