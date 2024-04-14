import NavBar from './navigation.js';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './AppB.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Courses" element={<Courses/>}>

              
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;