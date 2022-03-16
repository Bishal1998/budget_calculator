import Budget from './components/main/Budget';
import { Route, Routes } from 'react-router';
import AddNew from './components/form/AddNew';
import './App.css';

import {useState} from 'react';

function App() {


  // const [data, setData] = useState('');

  // const dataToNew = (budget) => {
  //   setData(budget)
  // }

  return (
    <>

    <Routes>
      <Route path = '/' element = {<Budget />} />
      <Route path = '/add' element = {<AddNew  />} />
    </Routes>
    </>
  );
}

export default App;
