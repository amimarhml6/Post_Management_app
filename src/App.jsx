import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddPost from './Pages/Create-Edit/AddPost';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/my-componenets/Footer';
import Navbar from './Components/my-componenets/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
           <Route path="/Create" element={<AddPost/>} />
           <Route path='/footer' element={<Footer/>}/>
          </Routes>
      </div>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
