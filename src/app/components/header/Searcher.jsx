import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearcherView from './SearcherView';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Searcher = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { t } = useTranslation('common');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error(t('header.empty'));
    } else {
      navigate(`/app/search?q=${search}`);
    }
    setSearch('');
  };

  return (
    <>
      <SearcherView handleChange={handleChange} handleSubmit={handleSubmit} search={search} />
    </>
  );
};

export default Searcher;
