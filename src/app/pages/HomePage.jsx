import WelcomeCard from '../components/Home/WelcomeCard';
import { Word } from '../components/Home/Word';
import { Helmet } from 'react-helmet';

export const HomePage = () => {
  return (
    <section className='home'>
      <Helmet title='AppStudent - Home' />
      <WelcomeCard />
      <Word />
    </section>
  );
};
