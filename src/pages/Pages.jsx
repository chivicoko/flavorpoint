import React from 'react'
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';   // {/* this is for the animation to work */}

function Pages() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path='/flavorpoint' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/Searched/:search' element={<Searched />} />
            <Route path='/Recipe/:id' element={<Recipe />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Pages;