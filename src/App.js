import { useState } from 'react';
import './App.css';
import Exercise1 from './containers/Excercise1';
import Exercise2 from './containers/Exercise2';
import Exercise3 from './containers/Exercise3';
import LocalStorageContext from './context/LocalStorageContext';
import styles from "./css/modal.module.css"

function App() {

  const [localStorage, setLocalStorage] = useState(new Map());

  return (
    <LocalStorageContext.Provider value={{ localStorage, setLocalStorage }}>
       <h1 className={styles.textStyle}>Expert test</h1>
       <hr/>
      <Exercise1/>
      <hr/>
      <Exercise2/>
      <hr/>
      <Exercise3/>
   </LocalStorageContext.Provider>
  );
}

export default App;
