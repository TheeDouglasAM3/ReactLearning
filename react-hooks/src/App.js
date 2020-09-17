import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';

function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger('name', name)

  return (
    <div className="App">
      <input 
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />      
    </div>
  );
}

export default App;
