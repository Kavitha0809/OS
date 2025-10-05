import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeSubmit from "./components/EmployeeSubmit.jsx";
import PHsubmit from "./components/PHsubmit.jsx";
import Report from "./components/Report.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Employeesubmit" element={<EmployeeSubmit />} />
          <Route path="/PHsubmit" element={<PHsubmit />} />
          <Route path="/Report" element={<Report />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
