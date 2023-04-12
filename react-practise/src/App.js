import './App.css';
import store from './components/counterStore';
import { Provider } from 'react-redux';
import Counter3 from './components/Counter3';
// import Counter from './components/Counter';
// import Counter1 from './components/Counter1';
// import Counter2 from './components/Counter2';
// import Greetings from './components/Greetings';
// import States from './components/States';
// import Class from './pages/Class';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Provider store={store}>
        <Counter3 />
      </Provider>



    </div>
  );
}

export default App;
