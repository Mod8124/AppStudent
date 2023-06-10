export const getGreeting = () => {
  let greeting;
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 12) {
    greeting = 'Buenos Días';
  }

  if (hours >= 12 && hours < 18) {
    greeting = 'Buenas Tardes';
  }

  if (hours >= 18 && hours < 24) {
    greeting = 'Buenas Noches';
  }

  return greeting;
};

export const motivationQuote = () => {
  const quotes = [
    'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito  😊',
    'Espero que cumplas tus objetivos para este día 🎉',
    'No te preocupes por el fracaso, preocúpate por las oportunidades que pierdes al no intentarlo 💪',
    '"El éxito es la suma de pequeños esfuerzos repetidos día tras día 🏆',
    'Si quieres algo que nunca has tenido, tienes que hacer algo que nunca has hecho 💥',
    'Nunca permitas que tus miedos tomen el control de tu vida 😁',
    'El éxito no es la llave de la felicidad. La felicidad es la llave del éxito. Si amas lo que estás haciendo, serás exitoso ✨',
    'Insisitr, persistir, resistir y nunca desistir 🎉',
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
};
