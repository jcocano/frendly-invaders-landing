import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./views/navbar";
import Home from "./views/Home";
import FrendlyIvanders from "./views/frendly-invaders";
import InvasionPlan from "./views/invasion-plan";
import Error404 from "./views/error404";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="frendly-invaders" element={<FrendlyIvanders/>}/>
        <Route path="invasion-plan" element={<InvasionPlan/>}/> 
        <Route path="error-404" element={<Error404/>}/>
        <Route path="*" element={<Navigate to="error-404"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
