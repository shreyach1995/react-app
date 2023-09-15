import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-todo-list" element={<TodoWrapper/>}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
