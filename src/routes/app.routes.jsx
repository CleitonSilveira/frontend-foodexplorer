import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/foods/:id" element={<Details />} />
      <Route path="/editdish/:id" element={<EditDish />} />
    </Routes>
  )
}