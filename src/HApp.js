import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar2';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';



const App = () => {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecipePages" element={<RecipePage />} />
            <Route path="/AddRecipe" element={<AddRecipe/>} />
            <Route path="/Homepage" element={<Homepage/>} />
            </Routes>
          <Footer />
        </Router>
      </div>
    );
  };