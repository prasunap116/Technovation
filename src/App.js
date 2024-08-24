import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home';
import Footer from './components/footer';
import Gallery from './components/Gallery';
import Bearers from './components/Bearers'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Payment from './components/Payment'
import Constitution from './components/Constitution';
import Member from './components/Member';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}
      
      
      <BrowserRouter>
        <Menu/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/bearers' element={<Bearers/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/constitution' element={<Constitution/>}/>
          <Route path='/ExMembers' element={<Member/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
