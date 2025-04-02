import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
}

function RoutesWrapper() {
  return useRoutes(routes);
}

export default App;
