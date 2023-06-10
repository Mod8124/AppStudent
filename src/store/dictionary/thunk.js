import { setIsLoading, setResults } from './dictionarySlice';
import axios from 'axios';

export const submitGetResults = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`,
      );
      if (data) {
        dispatch(setResults(data));
      }
    } catch (err) {
      const { response } = err;
      console.log(response);
    } finally {
      dispatch(setIsLoading()); // is loading  to false
    }
  };
};
