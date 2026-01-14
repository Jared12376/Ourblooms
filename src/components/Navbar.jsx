import styles from "../styles/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar() {


    return(
        <div>
            <nav>
            <p className='display'>OurBlooms</p>
            <ul className='caption1'>
                <li> <Link to='/'>HOME</Link> </li>
                <li> <Link to='/gallery'>GALLERY</Link> </li>
                <li> <Link to='/about'>ABOUT</Link> </li>
                <li> <Link
 to='/contact'>CONTACT</Link> </li>
            </ul>            </nav>
            <hr className='divider'></hr>
        </div>
    );
}


export default Navbar;