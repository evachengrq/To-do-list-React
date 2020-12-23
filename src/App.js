import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import TodoItems from './Components/TodoItems';

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TodoItems/>
    </div>
  );
}

export default App;
