import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom';

import TopPage from './routes/TopPage'
import TodoList from './routes/TodoList'
import Detail from './routes/Detail'

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/advanced-todo-list/' style={{ color: "white"}}>
          <h1 className='title'>Advanced Todo List</h1>
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/advanced-todo-list/' element={<TopPage/>}></Route>
          {/*日付で動的に*/}
          <Route path='/advanced-todo-list/:date' element={<TodoList/>}></Route>
          {/*Todoのidで動的に*/}
          <Route path='/advanced-todo-list/todoList/:todoId' element={<Detail/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
