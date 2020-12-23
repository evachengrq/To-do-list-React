import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Footer from './Components/Footer'
import TodoItems from './Components/TodoItems'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TodoItems/>
      <Footer/>
    </div>
  );
}

export default App;
