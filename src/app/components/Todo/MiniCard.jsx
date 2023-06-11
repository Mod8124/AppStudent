import { IoIosArrowForward } from 'react-icons/io';

export const MiniCard = ({ task }) => {
  console.log(task);
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
      <div className='cardTodo__date'>{task.date.slice(0, -7)}</div>
      <IoIosArrowForward />
    </article>
  );
};
