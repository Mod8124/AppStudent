import { IoCloseSharp } from 'react-icons/io5';

export const CardTodo = ({ task }) => {
  return (
    <article className={task.completed ? 'cardTodo cardTodo--active' : 'cardTodo'}>
      <div className='cardTodo__completed'>
        <div
          className={
            task.completed ? 'cardTodo__circle cardTodo__circle--active' : 'cardTodo__circle'
          }
        ></div>
      </div>
      <div className='cardTodo__title'>{task.title}</div>
      <div className='cardTodo__description'>{task.description}</div>
      <div className='cardTodo__date'>{task.date}</div>
      <IoCloseSharp />
    </article>
  );
};
