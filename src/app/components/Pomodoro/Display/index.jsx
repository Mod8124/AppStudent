import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const Display = ({ secondsLeft, toggle, active, format, mode }) => {
  const { t } = useTranslation('common');
  return (
    <div className='pomodoro__display'>
      <div
        className={
          mode === 'POMODORO'
            ? 'pomodoro__display-circle pomodoro__display-active'
            : 'pomodoro__display-circle'
        }
      >
        <p className='pomodoro__display-time'>{format(secondsLeft, 0)}</p>
        <button className='pomodoro__display-button' onClick={() => toggle('active')}>
          {active ? t('backpack.pomodoro.end') : t('backpack.pomodoro.start')}
        </button>
      </div>
    </div>
  );
};

Display.propTypes = {
  toggle: PropTypes.func,
  format: PropTypes.func,
  secondsLeft: PropTypes.number,
  active: PropTypes.bool,
  mode: PropTypes.string,
};
