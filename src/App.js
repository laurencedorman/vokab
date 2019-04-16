import React, { useState } from 'react';
import './App.css';

const initialTerms = [{
  foreign: 'bleu',
  native: 'blue',
},{
  foreign: 'voiture',
  native: 'car',
},{
  foreign: 'brosse',
  native: 'brush',
},{
  foreign: 'faire',
  native: 'to do',
}];

const getCurrentTerm = (terms) => {
  const filtered = terms.filter(term => !term.hasOwnProperty('matched'));

  return filtered[Math.floor(Math.random() * filtered.length)];
}

const App = () => {
  const [terms, setTerms] = useState(initialTerms);
  const matchTerm = (currentTerm, toCheck) => {
    if (currentTerm.foreign === toCheck.foreign && toCheck.native === currentTerm.native) {
      setTerms(prevTerms => prevTerms.map(term => {
        if (term.foreign === toCheck.foreign) {
          term.matched = true;
        }
        
        return term;
      }));
    }
  };

  const currentTerm = getCurrentTerm(terms);

  if (!currentTerm) {
    return (<div>Done!</div>);
  }
  
  return (
    <div className="App">
        {<div>{currentTerm.foreign}</div>}
        {terms.map(term =>
          <button
            key={term.foreign}
            type="button"
            disabled={term.matched}
            onClick={() => { matchTerm(currentTerm, term ) }}
          >
            {term.native}
          </button>
        )}
    </div>
  );
};

export default App;
