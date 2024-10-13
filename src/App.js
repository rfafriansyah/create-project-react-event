import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import PageSignIn from './pages/signin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/signin" element={<PageSignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
