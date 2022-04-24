import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./views/navbar";
import Home from "./views/Home";
import FrendlyIvanders from "./views/frendly-invaders";
import InvasionPlan from "./views/invasion-plan";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="frendly-invaders" element={<FrendlyIvanders/>}/>
        <Route path="invasion-plan" element={<InvasionPlan/>}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
