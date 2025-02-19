import { Footer } from '../components/landing/Footer';
import { Principal } from '../components/landing/Principal';
import { Services } from '../components/landing/Services';
import { WhatIsAppStudents } from '../components/landing/WhatIsAppStudents';

export const LandingPage = () => {
  return (
    <main>
      <section className='bg-primary'>
        <Principal />
      </section>
      <section className='bg-secondary'>
        <WhatIsAppStudents />
      </section>

      <section className='bg-primary'>
        <Services />
      </section>
      <Footer />
    </main>
  );
};
