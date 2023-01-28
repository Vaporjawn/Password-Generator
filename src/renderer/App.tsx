import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import './App.css';
import GeneratePassword from '../main/backend/generatePassword';

const Main = () => {
  const [generateButtonText, setGenerateButtonText] = useState('Generate');
  const [copyButtonVisibility, setCopyButtonVisibility] =
    useState('CopyButtonHidden');

  const generateClicked = () => {
    console.log('Generate button clicked');
    setGenerateButtonText('Regenerate');
    setCopyButtonVisibility('CopyButton');
  };
  return (
    <div className="Container">
      <h1>Password Generator</h1>
      <div className="PasswordContainer">
        <input type="text" readOnly className="PasswordText" />
        <div className="CopyButtonContainer">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className={copyButtonVisibility}>Copy</button>
        </div>
        <div className="GenerateButtonContainer">
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => generateClicked()} className="GenerateButton">
            {generateButtonText}
          </button>
        </div>
      </div>
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
