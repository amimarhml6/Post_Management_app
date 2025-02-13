import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Pages/Page1/Postss';
import Page2 from './Pages/Page2/AddPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Page1 />} />
          <Route path="/Home" element={<Page1 />} />
          <Route path="/Create" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
