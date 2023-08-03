import './App.css';


// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Base from './layout/base/Base';
// .................Pages............................
import Homepage from './pages/homepage/Homepage';
import TermsOfServices from './pages/TermsOfServices/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Whitepaper from './pages/whitepaper/whitepaper';
import Igo from './pages/Igo/Igo';
import ProfileOverview from './pages/profile_overview/ProfileOverView';
import ProfileClaims from './pages/profile_claims/ProfileClaims';
// .................Pages............................End

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/terms-of-services" element={<TermsOfServices></TermsOfServices>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path="/whitepaper" element={<Whitepaper></Whitepaper>}></Route>
            <Route path="/igo" element={<Igo></Igo>}></Route>
            <Route path="/profile/overview" element={<ProfileOverview></ProfileOverview>}></Route>
            <Route path="/profile/claims" element={<ProfileClaims></ProfileClaims>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
