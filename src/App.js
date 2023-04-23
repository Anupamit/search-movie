import './Styles/Movieapi.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movieapi from './Components/Movieapi';
import Viewdetails from './Components/Viewdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movieapi/>} /> 
        <Route path="/viewdetails/:id" element={<Viewdetails/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
