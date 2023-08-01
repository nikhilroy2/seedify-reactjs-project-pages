import logo from './logo.svg';
import './App.css';


// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Base from './layout/base/Base';
// .................Pages............................
import Homepage from './pages/homepage/Homepage';
import TermsOfServices from './pages/TermsOfServices/TermsOfServices';
// .................Pages............................End

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/terms-of-services" element={<TermsOfServices></TermsOfServices>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>

    </div>
  );
}

export default App;
