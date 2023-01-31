/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import './App.css';
import CopyToClipBoard from 'main/backend/copyToClipBoard';
import PasswordOptions from 'main/interfaces/passwordOptions';
import GeneratePassword from '../main/backend/generatePassword';
import Header from './components/header/header';
import Footer from './footer/footer';

const Main = () => {
  const [generateButtonText, setGenerateButtonText] = useState('Generate');
  const [copyButtonVisibility, setCopyButtonVisibility] =
    useState('CopyButtonHidden');
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const passwordOptions: PasswordOptions = {
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
  };

  const generateClicked = () => {
    setPassword('');
    setPassword(GeneratePassword(passwordOptions));
    setGenerateButtonText('Regenerate');
    setCopyButtonVisibility('CopyButton');
  };

  return (
    <div className="Container">
      <Header />
      <div className="PasswordContainer">
        <div className="PasswordTextContainer">
          <input
            type="text"
            readOnly
            value={password}
            className="PasswordText"
          />
        </div>
        <div className="PasswordLength">
          <label htmlFor="length" className="LengthLabel">
            Length
          </label>
          <input
            type="number"
            id="lengthInput"
            name="lengthInput"
            className="LengthInput"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="PasswordLengthSliderContainer">
          <input
            type="range"
            id="lengthSlider"
            name="lengthSlider"
            value={length}
            className="PasswordLengthSlider"
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="PasswordOptionsContainer">
          <div className="PasswordOptions">
            <input
              type="checkbox"
              id="uppercase"
              name="uppercase"
              onChange={(e) => setUppercase(e.target.checked)}
              checked={uppercase}
              className="Checkbox"
            />
            <label htmlFor="uppercase" className="CheckboxLabel">
              Uppercase
            </label>
          </div>
          <div className="PasswordOptions">
            <input
              type="checkbox"
              id="lowercase"
              name="lowercase"
              onChange={(e) => setLowercase(e.target.checked)}
              checked={lowercase}
              className="Checkbox"
            />
            <label htmlFor="lowercase" className="CheckboxLabel">
              Lowercase
            </label>
          </div>
          <div className="PasswordOptions">
            <input
              type="checkbox"
              id="numbers"
              name="numbers"
              onChange={(e) => setNumbers(e.target.checked)}
              checked={numbers}
              className="Checkbox"
            />
            <label htmlFor="numbers" className="CheckboxLabel">
              Numbers
            </label>
          </div>
          <div className="PasswordOptions">
            <input
              type="checkbox"
              id="symbols"
              name="symbols"
              onChange={(e) => setSymbols(e.target.checked)}
              checked={symbols}
              className="Checkbox"
            />
            <label htmlFor="symbols" className="CheckboxLabel">
              Symbols
            </label>
          </div>
        </div>
        <div className="ButtonContainer">
          <button
            onClick={() => CopyToClipBoard(password)}
            className={copyButtonVisibility}
          >
            <div className="ButtonText">Copy</div>
          </button>
          <button onClick={() => generateClicked()} className="GenerateButton">
            <div className="ButtonText">{generateButtonText}</div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
