import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

export const Button = ({ changeMode, mode, secondsLeft }) => {
  const { t } = useTranslation('common');
  return (
    <button
      className={
        secondsLeft === 0 ? 'pomodoro__button pomodoro__button-active' : 'pomodoro__button'
      }
      onClick={changeMode}
    >
      <AiOutlineClockCircle />
      {t(`backpack.pomodoro.${mode}`)}
      {secondsLeft === 0 && <FiArrowRightCircle />}
    </button>
  );
};

Button.propTypes = {
  changeMode: PropTypes.func,
  mode: PropTypes.string,
  secondsLeft: PropTypes.number,
};
