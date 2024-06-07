
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>EV-olution</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explorer</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
