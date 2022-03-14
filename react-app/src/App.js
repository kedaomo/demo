import React, { Fragment } from 'react'
import './App.css';
import Header from './components/Header';
import ToDo from './components/ToDo';
const App = () => {
  return (
    <Fragment>
      <Header />
      <ToDo />
    </Fragment>

  )
}

export default App;
