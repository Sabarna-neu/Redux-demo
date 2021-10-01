import './App.css';
import Input from './components/input-todo/input';
import Views from './components/views-todo/views';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const todo = useSelector(state => state.todo);
  console.log(todo);

  let count = 0;
  // status 0 -> not done 1-> done
  const addTodoItem = (item)=>{
    console.log(item)
    count = count + 1;
    setTodoItems(todoItems=>[...todoItems,{id:Math.random()*10, value:item, status:0}]);
  }

  const completedTask = (id)=>{
    const filteredItems = todoItems.filter(item => item.id !== id);
    console.log(filteredItems);
    
    const completed = todoItems.filter(item => item.id === id);
    console.log(completed)
    setCompletedItems(prevState=>[...completed,...prevState]);

    setTodoItems([...filteredItems]);
    console.log("Completed Items",completedItems);
  }

  //const listItems = useSelector(state => state.getState())
  // console.log(listItems)
  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Input Component */}
      <Input addItem={addTodoItem}></Input>
      {/* List Component */}
      <Views list={todoItems} completeTask = {completedTask}></Views>
    </div>
  );
}

export default App;
  