import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound"; // Import the 404 page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;