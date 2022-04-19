import { Link } from "react-router-dom";
// css
import './style.module.css';



const Navbar = () => {

    return (
      <div>
      
        <sidebar className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </sidebar>
      </div>
    );
}
export default Navbar;