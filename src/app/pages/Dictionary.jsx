import { AiOutlineSearch } from 'react-icons/ai';
import { GiArchiveResearch } from 'react-icons/gi';
import { Card } from '../components/Dictionary/Card';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitGetResults } from '../../store/dictionary/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

export const DictionaryPage = () => {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const { isLoading, result } = useSelector((state) => state.dictionary);

  const onSubmit = (event) => {
    event.preventDefault();
    if (key.length === 0) toast.error('No se puede realizar la busqueda');
    dispatch(submitGetResults(key));
  };
  return (
    <section className='dictionary'>
      <Helmet title='AppStudent - Diccionario' />
      <h1 className='dictionary__title'>Ingles diccionario</h1>

      <p className='dictionary__para'>
        Sabemos lo importante que es el inglés en estos días, esta sesión es para buscar palabras en
        inglés, ve su significado, y como se pronuncia.
      </p>

      <form onSubmit={onSubmit} className='dictionary__container'>
        <input
          className='dictionary__input'
          autoFocus
          type='text'
          onChange={(event) => setKey(event.target.value)}
          placeholder='Busca la palabra en inglés'
        />
        <GiArchiveResearch onClick={onSubmit} className='dictionary__svg' />
      </form>
      {isLoading && (
        <div>
          <AiOutlineSearch /> <h3>Buscandoo...</h3>
        </div>
      )}
      {!isLoading && result.length > 0 && <Card result={result[0]} />}
      {/* 
      <Card /> */}
    </section>
  );
};
