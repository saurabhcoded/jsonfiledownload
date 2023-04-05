import { BrowserRouter, Route, Routes } from "react-router-dom";
import KheloIndia from './pages/KheloIndia';
import AddSportsman from './pages/AddSportsman';
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<KheloIndia />} />
          <Route path='/add' element={<AddSportsman />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
