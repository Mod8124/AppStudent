import { AiOutlineSearch } from 'react-icons/ai';
import { GiArchiveResearch } from 'react-icons/gi';
import { Card } from '../components/Dictionary/Card';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitGetResults } from '../../store/dictionary/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const DictionaryPage = () => {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const { isLoading, result } = useSelector((state) => state.dictionary);
  const { t } = useTranslation('common');

  const onSubmit = (event) => {
    event.preventDefault();
    if (key.length === 0) toast.error(t('dictionarypage.empty'));
    dispatch(submitGetResults(key));
  };
  return (
    <section className='dictionary'>
      <Helmet title='AppStudent - Dictionary' />
      <h1 className='dictionary__title'>{t('dictionarypage.title')}</h1>

      <p className='dictionary__para'>{t('dictionarypage.subTitle')}</p>

      <form onSubmit={onSubmit} className='dictionary__container'>
        <input
          className='dictionary__input'
          autoFocus
          type='text'
          onChange={(event) => setKey(event.target.value)}
          placeholder={t('dictionarypage.search')}
        />
        <GiArchiveResearch onClick={onSubmit} className='dictionary__svg' />
      </form>
      {isLoading && (
        <div>
          <AiOutlineSearch /> <h3>{t('dictionarypage.searching')}</h3>
        </div>
      )}
      {!isLoading && result.length > 0 && <Card result={result[0]} />}
    </section>
  );
};
