import { Routes, Route } from "react-router-dom";

import "./sass/app.scss";

import Wrapper from "./components/Wrapper";
import NotFound404 from "./pages/NotFound404";
import HomoPage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index path="/" element={<HomoPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
