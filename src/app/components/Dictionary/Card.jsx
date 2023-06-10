import { GiSpeaker } from 'react-icons/gi';

let AudioP = null;

export const Card = ({ result, home }) => {
  const word = result[0];

  const findPronunciation = () => {
    let IPA = null;
    if (word?.phonetic) return word.phonetic;

    word.phonetics.forEach((phonetic) => {
      if (phonetic?.text) {
        IPA = phonetic.text;
        return;
      }
    });

    return IPA;
  };

  const start = () => {
    word.phonetics.forEach((audio) => {
      if (audio?.audio) {
        AudioP = audio.audio;
      }
    });

    if (!AudioP) return;

    let audio = new Audio(AudioP);

    audio.play();
  };

  return (
    <article className={home ? 'cardDictionary cardDictionary--home' : 'cardDictionary'}>
      <h3 className='cardDictionary__title'>{word.word}</h3>
      <div className='cardDictionary__speakerContainer'>
        <GiSpeaker className='cardDictionary__speaker' onClick={start} />
        <p className='cardDictionary__pronunciation'>{findPronunciation()}</p>
      </div>
      <h4 className='cardDictionary__titleMeaning'>Significado</h4>
      {word.meanings.map((meaning) => (
        <div className='cardDictionary__meanings' key={meaning.partOfSpeech}>
          <h4 className='cardDictionary__type'>{meaning.partOfSpeech}</h4>
          {meaning.definitions.map((definition, index) => {
            if (index > 2) return;
            return (
              <div className='cardDictionary__meaning' key={(definition, index)}>
                {' '}
                <span className='cardDictionary__point'>*</span> {definition.definition}
              </div>
            );
          })}
        </div>
      ))}
    </article>
  );
};
