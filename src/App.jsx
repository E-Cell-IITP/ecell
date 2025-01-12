import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./assets/pages/homepage";
import Team from "./assets/components/team";
import Register from "./assets/pages/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="register" element={<Register />} />
        
        
        
      </Routes>
    </BrowserRouter>
  
  );
}
