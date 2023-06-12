import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitGetHomeResults } from '../../../store/dictionary/thunk';
import { Card } from '../Dictionary/Card';
import { MiniCard } from '../Todo/MiniCard';

export const Word = () => {
  const dispatch = useDispatch();
  const { homeResults, isLoading } = useSelector((state) => state.dictionary);
  const { tasks } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(submitGetHomeResults());
  }, [dispatch]);

  return (
    <div className='word'>
      <article className='word__word'>
        <h5>Vocabulario de ingles que talvez no conozcas</h5>
        {!isLoading &&
          homeResults.length > 0 &&
          homeResults.map((result, index) => (
            <div className='word__cards' key={result + index + 'home'}>
              <Card result={result} home />
            </div>
          ))}
      </article>

      <article className='word__todo'>
        {tasks.length > 0 && (
          <>
            <h4>Tareas</h4>
            <div className='todoPage__cards todoPage__cards--word'>
              {tasks.length > 0 &&
                tasks.map((task, index) => (
                  <MiniCard key={index + 'miniCard'} task={task} index={index} />
                ))}
            </div>
          </>
        )}
      </article>
    </div>
  );
};
