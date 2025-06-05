import "./index.css";
import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null)
  console.log(inputElement)

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = 'Kai';
  }

  return ( 
    <div>
      <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>FOCUS</button>
    </div>
  );
};

export default App;
