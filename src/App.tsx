import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
