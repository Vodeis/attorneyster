import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "./components/Template";
import NotFound from "./pages/404NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cases from "./pages/Cases";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Practies from "./pages/Practies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/attorneyster" element={<Home />} />
            <Route path="/attorneyster/about" element={<About />} />
            <Route path="/attorneyster/practies" element={<Practies />} />
            <Route path="/attorneyster/cases" element={<Cases />} />
            <Route path="/attorneyster/blog" element={<Blog />} />
            <Route path="/attorneyster/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
