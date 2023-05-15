import gif01Fr from "../assets/brain_gif_reflex/fr/01.gif";
import gif02Fr from "../assets/brain_gif_reflex/fr/02.gif";
import gif03Fr from "../assets/brain_gif_reflex/fr/03.gif";
import gif04Fr from "../assets/brain_gif_reflex/fr/04.gif";
import gif05Fr from "../assets/brain_gif_reflex/fr/05.gif";
import gif06Fr from "../assets/brain_gif_reflex/fr/06.gif";
import gif07Fr from "../assets/brain_gif_reflex/fr/07.gif";
import gif08Fr from "../assets/brain_gif_reflex/fr/08.gif";
import gif09Fr from "../assets/brain_gif_reflex/fr/09.gif";
import gif10Fr from "../assets/brain_gif_reflex/fr/10.gif";
import gif11Fr from "../assets/brain_gif_reflex/fr/11.gif";
import gif12Fr from "../assets/brain_gif_reflex/fr/12.gif";
import gif13Fr from "../assets/brain_gif_reflex/fr/13.gif";
import gif14Fr from "../assets/brain_gif_reflex/fr/14.gif";
import gif15Fr from "../assets/brain_gif_reflex/fr/15.gif";
import gif16Fr from "../assets/brain_gif_reflex/fr/16.gif";
import gif17Fr from "../assets/brain_gif_reflex/fr/17.gif";
import gif18Fr from "../assets/brain_gif_reflex/fr/18.gif";

import gif01En from "../assets/brain_gif_reflex/en/01e.gif";
import gif02En from "../assets/brain_gif_reflex/en/02e.gif";
import gif03En from "../assets/brain_gif_reflex/en/03e.gif";
import gif04En from "../assets/brain_gif_reflex/en/04e.gif";
import gif05En from "../assets/brain_gif_reflex/en/05e.gif";
import gif06En from "../assets/brain_gif_reflex/en/06e.gif";
import gif07En from "../assets/brain_gif_reflex/en/07e.gif";
import gif08En from "../assets/brain_gif_reflex/en/08e.gif";
import gif09En from "../assets/brain_gif_reflex/en/09e.gif";
import gif10En from "../assets/brain_gif_reflex/en/10e.gif";
import gif11En from "../assets/brain_gif_reflex/en/11e.gif";
import gif12En from "../assets/brain_gif_reflex/en/12e.gif";
import gif13En from "../assets/brain_gif_reflex/en/13e.gif";
import gif14En from "../assets/brain_gif_reflex/en/14e.gif";
import gif15En from "../assets/brain_gif_reflex/en/15e.gif";
import gif16En from "../assets/brain_gif_reflex/en/16e.gif";
import gif17En from "../assets/brain_gif_reflex/en/17e.gif";
import gif18En from "../assets/brain_gif_reflex/en/18e.gif";

import brain from "../assets/brainGif.gif";
import React, { useState } from "react";

const HomePage = () => {
  const [language, setLanguage] = useState("fr");

  const tabGif = [
    {
      fr: {
        mainGif: gif01Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
      en: {
        mainGif: gif01En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091227aa",
      },
    },

    {
      fr: {
        mainGif: gif02Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09633ag",
      },
      en: {
        mainGif: gif02En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09633ag",
      },
    },
    {
      fr: {
        mainGif: gif03Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091821u",
      },
      en: {
        mainGif: gif03En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091821u",
      },
    },
    {
      fr: {
        mainGif: gif04Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091128ab",
      },
      en: {
        mainGif: gif04En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091128ab",
      },
    },
    {
      fr: {
        mainGif: gif05Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09534ah",
      },
      en: {
        mainGif: gif05En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09534ah",
      },
    },
    {
      fr: {
        mainGif: gif06Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091722v",
      },
      en: {
        mainGif: gif06En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091722v",
      },
    },
    {
      fr: {
        mainGif: gif07Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091029ac",
      },
      en: {
        mainGif: gif07En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091029ac",
      },
    },

    {
      fr: {
        mainGif: gif08Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091524x",
      },
      en: {
        mainGif: gif08En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091524x",
      },
    },
    {
      fr: {
        mainGif: gif09Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091623w",
      },
      en: {
        mainGif: gif09En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091623w",
      },
    },

    {
      fr: {
        mainGif: gif10Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09336aj",
      },
      en: {
        mainGif: gif10En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09336aj",
      },
    },
    {
      fr: {
        mainGif: gif11Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091524x",
      },
      en: {
        mainGif: gif11En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091524x",
      },
    },
    {
      fr: {
        mainGif: gif12Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09930ad",
      },
      en: {
        mainGif: gif12En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09930ad",
      },
    },
    {
      fr: {
        mainGif: gif13Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09237ak",
      },
      en: {
        mainGif: gif13En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09237ak",
      },
    },
    {
      fr: {
        mainGif: gif14Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091425y",
      },
      en: {
        mainGif: gif14En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091425y",
      },
    },
    {
      fr: {
        mainGif: gif15Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09831ae",
      },
      en: {
        mainGif: gif15En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09831ae",
      },
    },
    {
      fr: {
        mainGif: gif16Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/rt",
      },
      en: {
        mainGif: gif16En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/rt",
      },
    },
    {
      fr: {
        mainGif: gif17Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e091326z",
      },
      en: {
        mainGif: gif17En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e091326z",
      },
    },
    {
      fr: {
        mainGif: gif18Fr,
        url: "https://fr.play.brainsecurity.io/Tree/lesson006/e09732af",
      },
      en: {
        mainGif: gif18En,
        url: "https://en.play.brainsecurity.io/Tree/lesson006/e09732af",
      },
    },
  ];

  const switchLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr"); // switch entre 'fr' et 'en'
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="absolute z-0 w-full h-full">
        <img className="w-full" src={brain} alt="brainGif" />
      </div>

      <div className="absolute top-0 flex justify-center items-center h-full w-full z-10">
        <button
          onClick={switchLanguage}
          className="absolute top-0 right-0 m-4 p-2 bg-black text-white"
        >
          Switch Language
        </button>
        <div className="text-green-600 grid grid-cols-6 gap-4 z-10">
          {tabGif.map((item, i) => {
            return (
              <a
                href={item[language].url}
                target="_blank"
                rel="noreferrer"
                className="h-[170px] w-[140px]"
                key={i}
              >
                <img className="" src={item[language].mainGif} alt="GIF" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
