import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const Confirm = ({ text, close, handleReminder, index }) => {
  const { t } = useTranslation('common');
  return (
    <article className='calendar-schedule-confirm'>
      <div className='calendar-schedule-confirm-alert'>
        <h3>{text}</h3>
        <div className='calendar-schedule-confirm-wrapper'>
          <button
            className='calendar-schedule-confirm-button calendar-schedule-confirm-close'
            onClick={close}
          >
            {t('backpack.calendar.confirm.cancel')}
          </button>
          <button
            className='calendar-schedule-confirm-button calendar-schedule-confirm-confirm'
            onClick={() => {
              handleReminder('delete', index);
              close();
            }}
          >
            {t('backpack.calendar.confirm.confirm')}
          </button>
        </div>
      </div>
    </article>
  );
};

Confirm.propTypes = {
  text: PropTypes.string,
  close: PropTypes.func,
  index: PropTypes.number,
  handleReminder: PropTypes.func,
};
