import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearch } from '../../store/search/thunks';
import ArticlesView from '../components/Articles/ArticlesView';
import queryString from 'query-string';

const ArticlesPage = () => {
  const [lang, setLang] = useState('es');
  const dispatch = useDispatch();
  const { articles, keyword } = useSelector((state) => state.search);
  const { search } = useLocation();
  const { q } = queryString.parse(search);

  useEffect(() => {
    dispatch(getSearch(q || keyword, lang));
  }, [q, lang]);

  const handleLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className='articles'>
      <ArticlesView
        keyword={q}
        keyQ={keyword}
        lang={lang}
        language={handleLanguage}
        articles={articles}
      />
    </div>
  );
};

export default ArticlesPage;
