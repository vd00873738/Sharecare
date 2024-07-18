import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import OfferTerms from "./pages/OfferTerms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} exact></Route>
        <Route path="terms" element={<OfferTerms />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
