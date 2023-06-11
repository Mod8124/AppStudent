import { setIsLoading, setResults, setHomeResults } from './dictionarySlice';
import DictionaryApi from '../../api/DictionaryAPI';
import { words } from '../../utils/RandomWords';

export const submitGetResults = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await DictionaryApi.get(`${keyword}`);
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

// generate random words to show on homePage
const getRandomWords = () => {
  let result = [];

  while (result.length < 2) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    if (!result.includes(randomWord.word)) {
      result.push(randomWord);
    }
  }

  return result;
};

const fetchDefinition = async (keyword) => {
  try {
    const { data } = await DictionaryApi.get(`${keyword}`);
    return data[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const submitGetHomeResults = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const words = await getRandomWords(); // Get three random words
      const results = await Promise.all([fetchDefinition(words[0]), fetchDefinition(words[1])]);
      dispatch(setHomeResults(results));
    } catch (err) {
      const { response } = err;
      console.log(response);
    } finally {
      dispatch(setIsLoading()); // is loading  to false
    }
  };
};
