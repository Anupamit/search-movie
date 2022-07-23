import './components/Movieapi.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movieapi from './components/Movieapi';
import Viewdetails from './components/Viewdetails';

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
