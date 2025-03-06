
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import UserContext from './context';
import img from './Bank_wallpaper_4.jpeg';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,  
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat',  
    minHeight: '100vh',  
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Navbar bg="info" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">MASS BANK</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
              <Nav.Link href="#deposit">Deposit</Nav.Link>
              <Nav.Link href="#cashback">Cashback</Nav.Link>
              <Nav.Link href="#alldata">Alldata</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        <HashRouter>
          <UserContext.Provider 
            value={{"users":[{
              name:"Manikandan",
              email:"Mk@gmail.com",
              password:"Mk24#",
              amount:1000
            }]}}
          >
            
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/deposit' element={<Deposit />} />
              <Route path='/cashback' element={<Cashback />} />
              <Route path='/alldata' element={<Alldata />} />
            </Routes>
          </UserContext.Provider>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
