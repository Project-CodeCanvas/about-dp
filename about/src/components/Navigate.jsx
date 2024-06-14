// Navigate.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Walkthrough from "./Walkthrough/Walkthrough";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./NavBar/Navbar";

function Navigate() {
    return (
        <Router>
            <Navbar />
            <div id="renderedPage" className="content">
                <Routes>
                    <Route path="/walkthrough/*" element={<Walkthrough />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Walkthrough />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navigate;
