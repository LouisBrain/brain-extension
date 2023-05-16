import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./mouseTracker.css";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("fr");
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="App">
      <div className="flex justify-end pr-3 h-10 w-full bg-transparent fixed top-0 left-0 z-10">
        <div
          className="h-10 "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {language === "fr" ? (
            <img
              onClick={() => setLanguage("fr")}
              className="h-10 cursor-pointer"
              src="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/imgs/flags/France.png"
              alt="FR_flag"
            />
          ) : (
            <img
              onClick={() => setLanguage("en")}
              className="h-10 cursor-pointer"
              src="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/imgs/flags/United-Kingdoms.png"
              alt="UK_flag"
            />
          )}
          {isHover && (
            <div className="">
              {language === "fr" ? (
                <img
                  onClick={() => setLanguage("en")}
                  className="h-10 cursor-pointer bg-transparent"
                  src="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/imgs/flags/United-Kingdoms.png"
                  alt="UK_flag"
                />
              ) : (
                <img
                  onClick={() => setLanguage("fr")}
                  className="h-10 cursor-pointer bg-transparent"
                  src="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/imgs/flags/France.png"
                  alt="FR_flag"
                />
              )}
            </div>
          )}
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
