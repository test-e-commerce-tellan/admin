import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <RoutesWrapper />
      <Toaster />
    </Router>
  );
}

function RoutesWrapper() {
  return useRoutes(routes);
}

export default App;
