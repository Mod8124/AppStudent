import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import ArticlesSaved from '../../pages/ArticlesSaved';
import { useState } from 'react';
import { NoArticlesFound } from './NoArticlesFound';

const ArticlesView = ({ articles, language, lang, keyword, keyQ }) => {
  const [view, setView] = useState('Artículos');
  const changeView = (event) => {
    const text = event.target.innerHTML;
    setView(text);
  };
  return (
    <>
      <div className='articles__views'>
        <button
          className={
            view === 'Artículos' ? 'articles__view articles__view--active' : 'articles__view'
          }
          onClick={changeView}
        >
          Artículos
        </button>{' '}
        |{' '}
        <button
          className={
            view === 'Favoritos' ? 'articles__view articles__view--active' : 'articles__view'
          }
          onClick={changeView}
        >
          Favoritos
        </button>
      </div>
      {!keyword && !keyQ && <NoArticlesFound favorite={view === 'Favoritos'} />}
      {keyword && keyQ && (
        <>
          {view === 'Artículos' && (
            <>
              <div className='articles__header'>
                {articles.length > 0 ? (
                  <h2>
                    Mostrando resultados en {lang === 'es' ? 'Español' : 'Inglés'}{' '}
                    {keyword && 'de ' + keyword}
                  </h2>
                ) : (
                  <h2>No encontraste lo que buscabas? Intenta ser más específico</h2>
                )}
                <select className='articles__header-lang' defaultValue='Idioma' onChange={language}>
                  <option value=''>Idioma</option>
                  <option value='es'>Español</option>
                  <option value='en'>Inglés</option>
                </select>
              </div>
              <section className='articles__list-results'>
                {articles?.map((art) => (
                  <ArticleCard art={art} key={art.pageid} />
                ))}
              </section>
            </>
          )}
          {view === 'Favoritos' && <ArticlesSaved />}
        </>
      )}
    </>
  );
};

ArticlesView.propTypes = {
  articles: PropTypes.array.isRequired,
  language: PropTypes.func,
};

export default ArticlesView;
