import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header()
{
    return(
        <div>
          
         <Navbar bg="dark" variant="dark">
         <Container>
    <Navbar.Brand href="#home">Info Zone</Navbar.Brand>
    <Nav className="me-auto nav-bar-wrapper">
     <Link to="/">Home</Link>
     <Link to="/Register">Register</Link>
     <Link to="/AddProduct">About </Link>
     <Link to="/UpdateProduct">Solution</Link>
     
    </Nav>
    </Container>
  </Navbar>
  
        </div>
    )
}
export default Header