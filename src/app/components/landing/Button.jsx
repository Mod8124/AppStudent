import { Link } from 'react-router-dom';

const BUTTONS = {
  primary: 'landing-button-primary',
  secondary: 'landing-button-secondary',
};
export const Button = ({ children, type, href }) => {
  const buttonClass = BUTTONS[type] ?? BUTTONS.primary;
  return (
    <Link to={href} className={`landing-button ${buttonClass}`}>
      {children}
    </Link>
  );
};
