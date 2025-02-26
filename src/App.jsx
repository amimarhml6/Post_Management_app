import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginPage/LoginPage';
import Footer from './Components/my-componenets/Footer';
import Create from './Pages/Create/Create';
import Edit from './Pages/Edit/Edit';
import Signup from './Pages/SignupPage/SignupPage';

function App() {
  return (
    <>
    <Router>
      
      <div className="App">

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Create" element={<Create/>} />
          <Route path="/Edit" element={<Edit/>} />
          <Route path='/footer' element={<Footer/>}/>
        </Routes>

      </div>
    </Router>
    
    </>
  );
}

export default App;
