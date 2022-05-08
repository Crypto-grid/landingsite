import logo from './images/airbnb-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Navbar';
import FooterComponent from './components/Footer';

// import TabComponent from './components/Tabs';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import * from 'react-bootstrap';


function App() {
  return (
    
    <div className="App">
      {/* <TabComponent/> */}
      <NavComponent/>
      {/* <BodyComponent/> */}
      <FooterComponent/>
    </div> 
  );
}

export default App;
