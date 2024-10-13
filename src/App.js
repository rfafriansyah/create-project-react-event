import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  // Example components
  const Home = () => {
    return <h2>Home Page</h2>;
  };
  const About = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <Link to="/categories/5678999">Seminar</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <Link to="/categories/123456">Seminar</Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const Contact = () => {
    return <h2>Contact Page</h2>;
  };

  const CategorieDetails = () => {
    const { productId } = useParams();
    return <h1>Ini Category dengan id: {productId}</h1>;
  };

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link> |<Link to="/categories">Categories</Link> |
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<About />} />
          <Route path="/categories/:productId" element={<CategorieDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
