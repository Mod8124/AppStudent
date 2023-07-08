import { useTranslation } from 'react-i18next';

const Input = ({ onChange, value, className, autoComplete = 'on' }) => {
  const { t } = useTranslation('common');
  return (
    <input
      type='text'
      className={className}
      name='searchInput'
      placeholder={t('header.search')}
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
