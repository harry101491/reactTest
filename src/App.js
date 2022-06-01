import { useState, useEffect } from "react";

function App() {
  const [flag, setFlag] = useState(false);
  const [label, setLabel] = useState('');
  
  const onButtonClick = () => {
    setFlag(!flag);
  }

  useEffect(() => {
    setLabel(flag ? 'Flag On' : 'Flag Off');
  }, [label, flag]);

  return (
    <div className="App">
      <p>{ label }</p>
      <button onClick={onButtonClick}>Change Flag</button>
    </div>
  );
}

export default App;
