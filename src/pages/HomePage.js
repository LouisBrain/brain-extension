import "./HomePage.css";

const HomePage = ({ language }) => {
  const tabGif = [
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/01fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/01en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/02fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/02en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/03fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/03en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/04fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/04en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/05fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/05en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/06fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/06en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/07fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/07en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/08fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/08en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/09fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/09en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/10fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/10en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/11fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/11en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/12fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/12en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/13fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/13en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/14fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/14en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/15fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/15en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/16fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/16en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/17fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/17en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
    {
      fr: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/fr/18fr.gif",
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif:
          "https://storage.googleapis.com/cdnbrainsecurity/reflex_GIF/en/18en.gif",
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="absolute z-0 w-full h-full">
        <img
          className="w-full"
          src="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/medias/brainbgdark.gif"
          alt="brainGif"
        />
      </div>

      <div className="absolute top-0 flex justify-center items-center h-full w-full z-10">
        <div className="text-green-600 grid grid-cols-6 gap-4 z-10">
          {tabGif.map((item, i) => {
            return (
              <div className="card rainbow-border w-[130px] " key={i}>
                <a href={item[language].url} target="_blank" rel="noreferrer">
                  <img className="" src={item[language].mainGif} alt="GIF" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
