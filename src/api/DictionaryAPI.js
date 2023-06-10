import axios from 'axios';

const DictionaryApi = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});

export default DictionaryApi;
