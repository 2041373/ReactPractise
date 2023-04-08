import './App.css';
import Greetings from './components/Greetings';
import States from './components/States';
import Class from './pages/Class';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greetings/>
      <States />
      <Class></Class>
    </div>
  );
}

export default App;
