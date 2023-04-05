import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import KheloIndia from './pages/KheloIndia';
import AddSportsman from './pages/AddSportsman';
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <div>
          <Link to={"/"}><Button variant="outlined" className="text-capitalize rounded m-1">Show Table</Button></Link>
          <Link to={"/add"}><Button variant="outlined" className="text-capitalize rounded m-1">Add Data</Button></Link>
        </div>
        <Routes>
          <Route path='/' element={<KheloIndia />} />
          <Route path='/add' element={<AddSportsman />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
