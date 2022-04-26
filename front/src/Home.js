import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Home=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item">
                <Link to="home" class="nav-link active" aria-current="page">Home</Link>
              </li> */}
              <li class="nav-item">
                <Link to="register" class="nav-link active" aria-current="page">Register</Link>
              </li>
              <li class="nav-item">
                <Link to="login" class="nav-link active" aria-current="page">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Home;