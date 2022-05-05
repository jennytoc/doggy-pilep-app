import { Navbar, Nav, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import DoggyPileAPI from '../../api/DoggyPileAPI';
import "./NavStyles.css"

function NavBar(props) {
  const navigate = useNavigate()

  // helpers
  const logMeOut = async () => {
    const data = await DoggyPileAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }

  // render Login/Sign Up navbar if not logged in, else renders rest of navbar items
  const renderItems = () => {
    if (props.username === "") {
      return (
        <div>
          <Navbar className='navbar' sticky="top">
            <Navbar.Brand className="justify-content-start">
              <img alt="logo" src={require("../../images/DoggyPile-logo.png")} className="logo"/>
            </Navbar.Brand>
            <Nav className='ms-auto'>
                <Nav.Link as={Link} to="/" className='navbar-item' style={{color:'#797272'}}>Home</Nav.Link>
                <Nav.Link href="#site-features" className='navbar-item' style={{color:'#797272'}}>Features</Nav.Link>
                <Nav.Link as={Link} to="/" className='navbar-item' style={{color:'#797272'}}>Contact Us</Nav.Link>
            </Nav>
            <Nav className='ms-auto justify-content-end'>
              <Nav.Link as={Link} to="/login" className='navbar-item ' style={{color:'#FA9A49' }}>Login</Nav.Link>
              <Nav.Link as={Link} to="/signup" ><Button className='navbar-item signup-btn' style={{color:'#F8F2F2' }}>Sign Up</Button></Nav.Link>
              </Nav>
          </Navbar>
        </div>
      )
    } 
    return (
      <div>
        <Navbar className='navbar' sticky="top">
          <Navbar.Brand className="justify-content-start">
            <img alt="logo" src={require("../../images/DoggyPile-logo.png")} className="logo"/>
          </Navbar.Brand>
          <Nav className='ms-auto'>
              <Nav.Link as={Link} to="/feed" className='navbar-item' style={{color:'#797272'}}>Feed</Nav.Link>
              <Nav.Link as={Link} to={`/profile/${props.username && props.username.user_id}`} className='navbar-item' style={{color:'#797272'}}>Profile</Nav.Link>
              <Nav.Link as={Link} to="/mappage" className='navbar-item' style={{color:'#797272'}}>Map</Nav.Link>
          </Nav>
          <Nav className='ms-auto justify-content-end'>
            <Nav.Link as={Link} to="#" onClick={logMeOut}><Button className='navbar-item signup-btn' style={{color:'#F8F2F2' }}>Log Out</Button></Nav.Link>
            </Nav>
        </Navbar>
      </div>
    )
  }

  return (
    <div>
      { renderItems() }
    </div>
  )
}

export default NavBar;