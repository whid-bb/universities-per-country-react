import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/country-details/:country" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
