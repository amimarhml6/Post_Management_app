import './HomeStyle.css'
import HomePage from '../../Components/my-componenets/HomePage/HomePage';
import Navbar from '../../Components/my-componenets/Navbar';
import ListComponent from '../../Components/my-componenets/ListComponent/ListComponent'
import Footer from '../../Components/my-componenets/Footer';
function Home() {

  return (
    <>
        <Navbar/>
        <HomePage/>
        <ListComponent/>
        <br></br>
        <br></br>
        <Footer/>
    </>
  )
}

export default Home
