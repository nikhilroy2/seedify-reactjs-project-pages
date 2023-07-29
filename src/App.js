import logo from './logo.svg';
import './App.css';
import Base from './layout/base/Base';
// .................Pages............................
import Homepage from './pages/homepage/Homepage';
// .................Pages............................End

function App() {
  return (
    <div className="App">
      <Base>
        <Homepage></Homepage>
      </Base>
    </div>
  );
}

export default App;
