import React from 'react';
import Home from './Pages/Home';
import Studies from './Pages/Studies';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={"/studies/:study"} element={<Studies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
