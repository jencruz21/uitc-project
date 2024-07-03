import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/header/Header.js'
import FormComponent from './components/form/FormComponent';

const App = () => {
  return(
    <div style={{margin: 0}}>
      <Header />
      <FormComponent />
    </div>
  )
}

export default App;
