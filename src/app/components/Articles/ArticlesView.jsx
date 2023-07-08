import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import ArticlesSaved from '../../pages/ArticlesSaved';
import { useState } from 'react';
import { NoArticlesFound } from './NoArticlesFound';
import { useTranslation } from 'react-i18next';

const ArticlesView = ({ articles, language, lang, keyword, keyQ }) => {
  const [view, setView] = useState('Artículos');
  const { t } = useTranslation('common');
  const changeView = (event) => {
    const text = event.target.dataset.view;
    setView(text);
  };
  return (
    <>
      <div className='articles__views'>
        <button
          className={
            view === 'Artículos' ? 'articles__view articles__view--active' : 'articles__view'
          }
          data-view='Artículos'
          onClick={changeView}
        >
          {t('searchpage.articles.title')}
        </button>{' '}
        |{' '}
        <button
          className={
            view === 'Favoritos' ? 'articles__view articles__view--active' : 'articles__view'
          }
          data-view='Favoritos'
          onClick={changeView}
        >
          {t('searchpage.favorites.title')}
        </button>
      </div>
      {!keyword && !keyQ && <NoArticlesFound favorite={view === 'Favoritos'} />}
      {keyQ && (
        <>
          {view === 'Artículos' && (
            <>
              <div className='articles__header'>
                {articles.length > 0 ? (
                  <h2>
                    {t('searchpage.articles.results')}{' '}
                    {lang === 'es'
                      ? t('searchpage.articles.option.es')
                      : t('searchpage.articles.option.en')}{' '}
                    {keyword && t('searchpage.articles.for') + keyword}
                  </h2>
                ) : (
                  <h2>{t('searchpage.notresults')}</h2>
                )}
                <select className='articles__header-lang' defaultValue='Idioma' onChange={language}>
                  <option value=''>{t('searchpage.articles.option.title')}</option>
                  <option value='es'>{t('searchpage.articles.option.es')}</option>
                  <option value='en'>{t('searchpage.articles.option.en')}</option>
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
