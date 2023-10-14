import React, { useState } from 'react';
import './App.css';

function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  }

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea 
        placeholder="Start typing..."
        onChange={handleInputChange} 
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
