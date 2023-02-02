import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNewsPage from "./pages/MainNewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainNewsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
