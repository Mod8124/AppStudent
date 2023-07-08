import { useTranslation } from 'react-i18next';

export const NoArticlesFound = ({ favorite }) => {
  const { t } = useTranslation('common');
  return (
    <section className='waiting-search'>
      <figure className='waiting-search__img'>
        <img src='/assets/waiting_to_search.svg' alt='image' />
      </figure>
      <h3 className='waiting-search__msg'>
        {t('searchpage.notfound')}{' '}
        {favorite ? t('searchpage.favorites.notfound') : t('searchpage.articles.notfound')}
      </h3>
    </section>
  );
};
