import { Link } from "react-router-dom"
import './Style.css'

const Navbar = () =>{
    return(
<>
<header className="header">
  <Link to ='/' href="#" className="logo"> Portfolio </Link>
  <i class="fa-solid fa-bars" id="menu-icon"></i>
  <nav className="navbar">
    <Link to ="/" href="#home" className="active"> Home </Link>
    <Link to ="/about" href="#about">About</Link>
    <Link to ="/services" href="#services">Services</Link>
    <Link to ="/projects" href="#project">Projects</Link>
    <Link to ="/contact" href="#contact">Contact</Link>
  </nav>
</header>

</>
    )
}

export default Navbar