import logo from './logo.svg';

import WordLetterCount from './wordLetterCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id='top'>
        GeeksforGeeks
      </h1>
      <h1>Words and Letters
        Counter
      </h1>
      <WordLetterCount />
    </div>
  );
}

export default App;
