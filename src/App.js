import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Introduction from "./Introduction";
import MainPage from "./MainPage";
import ExampleFunc from "./ExampleFunc";
import SearchResult from "./SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="login-page">
             <Introduction />
             <Login />
             <Register/>
          </div>
        }/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/example" element={<ExampleFunc />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;