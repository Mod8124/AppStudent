import React from 'react';

export const NoArticlesFound = ({ favorite }) => {
  return (
    <section className='waiting-search'>
      <figure className='waiting-search__img'>
        <img src='/assets/waiting_to_search.svg' alt='image' />
      </figure>
      <h3 className='waiting-search__msg'>
        Esperando por tu {favorite ? 'favoritos!' : 'búsqueda!'}
      </h3>
    </section>
  );
};
