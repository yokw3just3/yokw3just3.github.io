import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Recommendation from "./pages/Recommendation";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import AppProvider from "./context/AppProvider";


function App() {
  return (
      <AppProvider>
        <LinkPreview url='https://yokwejuste.me' width='400px' imageHeight={200}/>;
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendation" element={<Recommendation />} />
          {/* <Route path="/more" element={<Recommendation />} /> */}
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </AppProvider>
  );
}

export default App;
