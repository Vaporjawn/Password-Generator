/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import './App.css';
import GeneratePassword from '../main/backend/generatePassword';
import Header from './components/header/header';
import Footer from './footer/footer';

let password: string;
let uppercase: boolean;
let lowercase: boolean;
let numbers: boolean;
let symbols: boolean;

const Main = () => {
  const [generateButtonText, setGenerateButtonText] = useState('Generate');
  const [copyButtonVisibility, setCopyButtonVisibility] =
    useState('CopyButtonHidden');
  const [length, setLength] = useState(12);

  const generateClicked = () => {
    password = GeneratePassword();
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
          <label htmlFor="length">Length</label>
          <input
            type="number"
            id="lengthInput"
            name="lengthInput"
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
              className="Checkbox"
            />
            <label htmlFor="symbols" className="CheckboxLabel">
              Symbols
            </label>
          </div>
        </div>
        <div className="ButtonContainer">
          <button className={copyButtonVisibility}>Copy</button>
          <button onClick={() => generateClicked()} className="GenerateButton">
            {generateButtonText}
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
