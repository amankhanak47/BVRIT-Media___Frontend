import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Member from './pages/Member';
import Allphoto from './pages/Allphoto';
import MemberSignup from './pages/MemberSignup';
import Memberlogin from './pages/Memberlogin';
import Memberprofile from './pages/Memberprofile';
import MemberLogedin from './pages/MemberLogedin';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
    
          <Route path="/" element={<Home />} />
         
          <Route path="/members" element={<Member />} />
          <Route path="/allphoto" element={<Allphoto />} />
          <Route path="/membersignup" element={<MemberSignup />} />
          <Route path="/memberlogin" element={<Memberlogin />} />  
          <Route path="/memberprofile:id" element={<Memberprofile />} />  
          <Route path="/member" element={<MemberLogedin />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





