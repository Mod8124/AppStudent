import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const Button = ({ text, changeView, view }) => {
  const { t } = useTranslation('common');
  return (
    <button
      className={
        view === text
          ? 'calendar-view-button calendar-view-button-active'
          : 'calendar-view-button calendar-view'
      }
      onClick={changeView}
      data-key={text}
    >
      {t(`backpack.calendar.${text}`)}
    </button>
  );
};

Button.prototypes = {
  text: PropTypes.string,
  changeView: PropTypes.func,
};
