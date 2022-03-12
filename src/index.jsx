import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Todos from './pages/Todos';
import TodoDetails from './pages/TodoDetails';
import TodoCreate from './pages/TodoCreate';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todos/>}>
          <Route path="/todos/:todoId" element={<TodoDetails />}/>
          <Route path="/todos/create" element={<TodoCreate/>}/>
        </Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
