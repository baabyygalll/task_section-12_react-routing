import logo from './logo.svg';
import './App.css';
/** React Router */
import { Routes, Route } from "react-router-dom";
// Pages
import Home from './Screens/Home';
import AboutApp from './Screens/AboutApp';
import AboutAuthor from './Screens/AboutAuthor';
import PageNotFound from './Screens/PageNotFound';






function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutApp />} />
      <Route path="/about2" element={<AboutAuthor />} />
      <Route path="*" element={<PageNotFound />} />
      
    
    </Routes>
  );
}

export default App;
