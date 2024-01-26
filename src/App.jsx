import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
