import { GiSpeaker } from 'react-icons/gi';

let AudioP = null;

export const Card = ({ result }) => {
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

  console.log(word);
  return (
    <article>
      <h3>{word.word}</h3>
      <p>{findPronunciation()}</p>
      <h4>Significado</h4>
      {word.meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          <h4>{meaning.partOfSpeech}</h4>
          {meaning.definitions.map((definition, index) => {
            if (index > 2) return;
            return <div key={(definition, index)}>* {definition.definition}</div>;
          })}
        </div>
      ))}
      <GiSpeaker onClick={start} />
    </article>
  );
};
