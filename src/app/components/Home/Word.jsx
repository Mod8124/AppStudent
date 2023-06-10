import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitGetHomeResults } from '../../../store/dictionary/thunk';
import { Card } from '../Dictionary/Card';

export const Word = () => {
  const dispatch = useDispatch();
  const { homeResults, isLoading } = useSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(submitGetHomeResults());
  }, [dispatch]);
  return (
    <article className='word'>
      <div className='word__word'>
        <h5>Vocabulario de ingles que talvez no conozcas</h5>
        {!isLoading &&
          homeResults.length > 0 &&
          homeResults.map((result, index) => (
            <div className='word__cards' key={result + index + 'home'}>
              <Card result={result} home />
            </div>
          ))}
      </div>
      <div className='word__todo'></div>
    </article>
  );
};
