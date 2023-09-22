import { Routes, Route } from "react-router-dom";

import "./sass/app.scss";

import Wrapper from "./components/Wrapper";
import NotFound404 from "./pages/NotFound404";
import HomoPage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import CreateState from "./pages/CreateState";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index path="/" element={<HomoPage />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/discussions/create" element={<CreateState />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
