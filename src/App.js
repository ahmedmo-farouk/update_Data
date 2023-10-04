import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />}></Route>
          <Route path="/create" element={< Create />}></Route>
          <Route path="/edit/:id" element={< Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
