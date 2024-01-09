import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import {Routes, Route} from 'react-router-dom';
import IITjee from "./pages/IITjee";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NEET from "./pages/NEET";
import Privacypolicy from "./pages/Privacypolicy";
import Termsconditions from "./pages/Termsconditions";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/"  element={<Home/>} />
     <Route path="/aboutus" element={<Aboutus/>} />
       <Route path="/iitjee" element={<IITjee/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/neet" element={<NEET/>}/>
      <Route path="/privacypolicy" element={<Privacypolicy/>}/>
      <Route path="/termsconditions" element={<Termsconditions/>}/> 
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
