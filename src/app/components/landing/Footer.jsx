import { BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { VscGithub, VscRepoForked } from 'react-icons/vsc';

export const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='footer-container'>
        <div className='footer'>
          <h3 className='footer__logo'>
            App<span>Student</span>
          </h3>
          <ul className='footer__social-networks'>
            <li>
              <a href='https://github.com/Mod8124/AppStudent' target='_blank' rel='noreferrer'>
                <VscGithub />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Kevin04C/app-estudiantes'
                target='_blank'
                rel='noreferrer'
              >
                <VscRepoForked />
              </a>
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <SiGmail />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
