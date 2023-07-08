export const getGreeting = () => {
  let greeting;
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 12) {
    greeting = 'morning';
  }

  if (hours >= 12 && hours < 18) {
    greeting = 'afternoon';
  }

  if (hours >= 18 && hours < 24) {
    greeting = 'evening';
  }

  return greeting;
};

export const motivationQuote = () => {
  const quotes = {
    en: [
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful 😊',
      'I hope you achieve your goals for today 🎉',
      "Don't worry about failure, worry about the opportunities you miss by not trying 💪",
      'Success is the sum of small efforts repeated day in and day out 🏆',
      "If you want something you've never had, you have to do something you've never done 💥",
      'Never let your fears take control of your life 😁',
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful ✨',
      'Persist, persist, resist, and never give up 🎉',
      'Dreams begin when you believe in them 📚',
      'Show them what a Saiyan is made of! 🙌',
    ],
    es: [
      'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito  😊',
      'Espero que cumplas tus objetivos para este día 🎉',
      'No te preocupes por el fracaso, preocúpate por las oportunidades que pierdes al no intentarlo 💪',
      '"El éxito es la suma de pequeños esfuerzos repetidos día tras día 🏆',
      'Si quieres algo que nunca has tenido, tienes que hacer algo que nunca has hecho 💥',
      'Nunca permitas que tus miedos tomen el control de tu vida 😁',
      'El éxito no es la llave de la felicidad. La felicidad es la llave del éxito. Si amas lo que estás haciendo, serás exitoso ✨',
      'Insisitr, persistir, resistir y nunca desistir 🎉',
      ' Los sueños comienzan cuando se cree en ellos 📚',
      '¡Muéstrales de qué está hecho un Saiyan! 🙌',
    ],
  };

  return {
    en: quotes.en[Math.floor(Math.random() * quotes.en.length)],
    es: quotes.es[Math.floor(Math.random() * quotes.es.length)],
  };
};
