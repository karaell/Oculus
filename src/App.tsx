import React from 'react';
import './scss/general.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
