import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DetailPage from "@/pages/DetailPage";
import LayoutShell from "@/layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutShell>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/movie/:id"
            element={<DetailPage />}
          />
        </Routes>
      </LayoutShell>
    </BrowserRouter>
  );
};

export default Router;
