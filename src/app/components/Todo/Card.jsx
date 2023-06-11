import { IoCloseSharp } from 'react-icons/io5';

import { removeTask, setCompleted } from '../../../store/todo/todoSlice';
import { useDispatch } from 'react-redux';

export const CardTodo = ({ task, index }) => {
  const dispatch = useDispatch();
  const handleCompletedTask = () => {
    dispatch(setCompleted(index));
  };
  const handleRemoveTask = () => {
    dispatch(removeTask(index));
  };
  return (
    <article className={task.completed ? 'cardTodo cardTodo--active' : 'cardTodo'}>
      <div className='cardTodo__completed'>
        <div
          onClick={handleCompletedTask}
          className={
            task.completed ? 'cardTodo__circle cardTodo__circle--active' : 'cardTodo__circle'
          }
        ></div>
      </div>
      <div className='cardTodo__title'>{task.title}</div>
      <div className='cardTodo__description'>{task.description}</div>
      <div className='cardTodo__date'>{task.date}</div>
      <IoCloseSharp onClick={handleRemoveTask} />
    </article>
  );
};
