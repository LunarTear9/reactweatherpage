import { Link } from 'react-router-dom';
import './NavigationBar.css';
import iconLogo from './assets/mylogo.png';

const handleIconClick2 = () => {
    window.location.href = "https://www.pitmtech.com";
  };


const NavBar = () => {
return (
    <nav className="navbar">
        <ul className="nav-list">

       

<div className = "links">
    <div className="Container">
<div className="icon-container" onClick={handleIconClick2}>
            <img src={iconLogo} alt="Icon" className="icon" style={{ width: '110px', height: '100px', cursor: 'pointer' }} />
          </div>
          <div className="HeaderList">
          <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        
        </div>
          </div>
</div>
       
      </ul>

</nav>
);




//<Link to="/">App</Link>
//<Link to="/AppB">AppB</Link>



}

export default NavBar;