import { toast } from 'react-hot-toast';
import { Footer } from '../components/landing/Footer';
import { Principal } from '../components/landing/Principal';
import { Services } from '../components/landing/Services';
import { WhatIsAppStudents } from '../components/landing/WhatIsAppStudents';
import { useEffect } from 'react';

export const LandingPage = () => {
  useEffect(() => {
    toast('Esta es mi version de este projecto, Puedes ver mas info en los links de abajo', {
      icon: '🚧',
      duration: 6000,
      position: 'top-left',
    });
  }, []);
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
