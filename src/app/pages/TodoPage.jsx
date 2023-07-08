import { AiFillPlusCircle } from 'react-icons/ai';
import { CardTodo } from '../components/Todo/Card';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../components/Modal';
import { MdTitle } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../../store/todo/todoSlice';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const TodoPage = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [active, toggleActive] = useModal(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [filter, setFilter] = useState('Todos');
  const { t } = useTranslation('common');

  const filters = {
    Todos: (tasks) => tasks,
    Activos: (tasks) => tasks.filter((task) => !task.completed),
    Completados: (tasks) => tasks.filter((task) => task.completed),
  };

  const [showError, setShowError] = useState(false);
  const filteredTasks = filters[filter](tasks);

  const toggleModalAdd = () => {
    setShowError(false);
    toggleActive();
  };

  const changeFilter = (value) => {
    if (value.target.localName !== 'button') return;
    setFilter(value.target.dataset.view);
  };

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // add task to todo
  const addTask = () => {
    if (title.length === 0) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    const newTask = {
      title,
      completed: false,
      description: info,
      date: new Date().toLocaleDateString('es-ES', options),
    };
    dispatch(setTask(newTask));
    setTitle('');
    setInfo('');
  };
  return (
    <section className='todoPage'>
      <Helmet title='AppStudent - Tasks' />
      <h1 className='todoPage__title'>{t('taskpage.title')}</h1>

      <article className='todoPage__menu' onClick={changeFilter}>
        <button
          data-view='Todos'
          className={filter === 'Todos' ? 'todoPage__btn todoPage__btn--active' : 'todoPage__btn'}
        >
          {t('taskpage.all')}
        </button>
        <span className='todoPage__space'>|</span>
        <button
          data-view='Activos'
          className={filter === 'Activos' ? 'todoPage__btn todoPage__btn--active' : 'todoPage__btn'}
        >
          {t('taskpage.active')}
        </button>
        <span className='todoPage__space'>|</span>
        <button
          data-view='Completados'
          className={
            filter === 'Completados' ? 'todoPage__btn todoPage__btn--active' : 'todoPage__btn'
          }
        >
          {t('taskpage.completed')}
        </button>
      </article>

      <article className='todoPage__content'>
        <div className='todoPage__cards'>
          {filteredTasks &&
            filteredTasks.map((task, index) => <CardTodo key={index} task={task} index={index} />)}
        </div>

        <div className='todoPage__info'>
          <button className='todoPage__btnAdd' onClick={toggleModalAdd}>
            <AiFillPlusCircle /> {t('taskpage.add')}
          </button>
          {active && (
            <Modal toggleActiveModal={toggleActive}>
              <article className='todoPage__modal'>
                <div className='todoPage__newTaskContainer'>
                  <IoCloseSharp onClick={toggleModalAdd} className='todoPage__newTask--icon' />
                  <button className='todoPage__newTask'>{t('taskpage.form.title')}</button>
                  <IoCheckmarkSharp onClick={addTask} className='todoPage__newTask--icon' />
                </div>
                <div className='todoPage__inputContainer'>
                  <MdTitle />
                  <input
                    className='todoPage__input'
                    type='text'
                    value={title}
                    placeholder={t('taskpage.form.titleTitle')}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                {showError && <p className='todoPage__error'>Título es requerido</p>}
                <br />
                <div className='todoPage__inputContainer'>
                  <HiMenuAlt2 />
                  <input
                    className='todoPage__input todoPage__input--description'
                    type='text'
                    value={info}
                    placeholder={t('taskpage.form.description')}
                    onChange={(e) => setInfo(e.target.value)}
                  />
                </div>
              </article>
            </Modal>
          )}
          <p className='todoPage__total'>
            <span>{filteredTasks.length}</span> {t('taskpage.title')}{' '}
            {filter === 'Todos'
              ? t('taskpage.allTask')
              : filter === 'Activos'
              ? t('taskpage.active')
              : t('taskpage.completed')}
          </p>
        </div>
      </article>
    </section>
  );
};
