import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
          <Home />
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
