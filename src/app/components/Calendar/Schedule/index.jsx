import { AiOutlineEdit } from 'react-icons/ai';
import { TfiTrash } from 'react-icons/tfi';
import { Toggle } from '../Schedule/Toggle';
import { Form } from '../Form';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Confirm } from '../Confirm';
import { useTranslation } from 'react-i18next';

export const Schedule = ({
  reminders,
  handleReminder,
  activeForm,
  toggleForm,
  handleForm,
  form,
}) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const [confirm, setConfrm] = useState(false);
  const [index, setIndex] = useState(reminders.length);
  const handleConfirm = (id) => {
    setIndex(id);
    setConfrm(true);
  };
  const { t } = useTranslation('common');
  return (
    <div className='calendar-schedule'>
      {reminders &&
        reminders.length > 0 &&
        reminders.map((reminder, index) => (
          <div className='calendar-schedule-wrapper' key={reminder.title + index}>
            <h3 className='calendar-schedule-wrapper-title'>
              {reminder.title === '' ? '(Sin título)' : reminder.title}
            </h3>
            <h4 className='calendar-schedule-wrapper-subTitle'>
              {reminder.date.toLocaleDateString('es', options)}
            </h4>
            <p className='calendar-schedule-wrapper-paragraph'>{reminder.description}</p>
            <Toggle reminder={reminder.noti} text={t('backpack.calendar.form.notification')} />

            <div className='calendar-schedule-wrapper-options'>
              <div onClick={() => toggleForm(reminder)}>
                <AiOutlineEdit />
              </div>

              <div onClick={() => handleConfirm(index)}>
                <TfiTrash />
              </div>
            </div>
          </div>
        ))}
      {reminders.length === 0 && (
        <h2 className='calendar-schedule-none'>{t('backpack.calendar.empty')}</h2>
      )}
      {activeForm && (
        <Form
          toggleForm={toggleForm}
          form={form}
          title={t('backpack.calendar.form.edit')}
          handleReminder={handleReminder}
          handleForm={handleForm}
          edit
        />
      )}
      {confirm && (
        <Confirm
          text={t('backpack.calendar.confirm.title')}
          index={index}
          handleReminder={handleReminder}
          close={() => setConfrm(false)}
        />
      )}
    </div>
  );
};

Schedule.propTypes = {
  reminders: PropTypes.array,
  handleReminder: PropTypes.func,
  activeForm: PropTypes.bool,
  toggleForm: PropTypes.func,
  handleForm: PropTypes.func,
  form: PropTypes.object,
};
