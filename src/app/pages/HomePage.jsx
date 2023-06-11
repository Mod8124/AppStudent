import WelcomeCard from '../components/Home/WelcomeCard';
import { Word } from '../components/Home/Word';

export const HomePage = () => {
  return (
    <section className='home'>
      <WelcomeCard />
      <Word />
    </section>
  );
};
