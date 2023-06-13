import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageList from './components/ImageList';
import ImageDetails from './components/ImageDetails';

const App = () => {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3001/images');
      
      if (!response.ok) {
        throw new Error(`Error retrieving images: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      const imageArray = Array.isArray(data) ? data : [];
      setImages(imageArray);
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <Router>
      <div>
        
        <Routes>
          <Route
            path="/"
            element={<ImageList images={images} />}
          />
          <Route
            path="/images/:id"
            element={<ImageDetails images={images} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
