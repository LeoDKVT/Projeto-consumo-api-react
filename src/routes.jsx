import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import PageError from "./pages/PageError";
import Header from "./pages/Header";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}
