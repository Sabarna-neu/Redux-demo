import './App.css';
import Input from './components/input-todo/input';
import Views from './components/views-todo/views';
import RandomUser from './components/RandomUsers/RandomUser';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Input Component */}
      <Input></Input>
      {/* List Component */}
      <Views></Views>
      <hr />
      <h1>Fetch Random User</h1>
      <RandomUser />
    </div>
  );
}

export default App;
  