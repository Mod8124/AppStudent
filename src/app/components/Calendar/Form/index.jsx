import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { Toggle } from './Toggle';
import { Input } from './Input';
import PropTypes from 'prop-types';

export const Form = ({ toggleForm, form, handleForm, handleReminder, edit, title }) => {
  const { t } = useTranslation('common');
  return (
    <article className='calendar-form'>
      <div className='calendar-form-close'>
        <IoCloseSharp onClick={toggleForm} />
        <h3>{title}</h3>
        <IoCheckmarkSharp
          className='calendar-form-yes'
          onClick={() => (edit ? handleReminder('edit') : handleReminder())}
        />
      </div>
      <Input
        type='text'
        placeholder={t('backpack.calendar.form.title')}
        name='title'
        handleForm={handleForm}
        value={form.title}
      />
      <Input
        type='text'
        placeholder={t('backpack.calendar.form.description')}
        name='description'
        handleForm={handleForm}
        value={form.description}
      />
      <Input
        type='date'
        name='date'
        value={`${form.date.getFullYear()}-${String(form.date.getMonth() + 1).padStart(
          2,
          '0',
        )}-${String(form.date.getDate()).padStart(2, '0')}`}
        handleForm={handleForm}
      />
      <Toggle
        text={t('backpack.calendar.form.notification')}
        name='noti'
        value={form.noti}
        handleToggle={handleForm}
      />
    </article>
  );
};

Form.propTypes = {
  toggleForm: PropTypes.func,
  form: PropTypes.object,
  handleForm: PropTypes.func,
  handleReminder: PropTypes.func,
  edit: PropTypes.bool,
  title: PropTypes.string,
};
