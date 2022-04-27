import './App.css';
import Home from './Home';
import Login from './Login';
import Blog from './Blog';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div className="container">
          {/* <Home /> */}
          <Blog />
          {/* <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
