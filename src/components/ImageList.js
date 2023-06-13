import React from 'react';
import { Link } from 'react-router-dom';

const ImageList = ({ images }) => {
  return (
    <div style={{display:"grid",justifyContent:"center"}}>
      <h2 style={{textAlign:"center"}}>Top NEWS</h2><br></br>
      {images.map((image) => (
        
        <Link to={`/images/${image.id}`} key={image.id}>
          <h1 style={{textDecoration:"none"}}>{image.headline}</h1>
          <img style={{borderRadius:"10px"}}  src={image.url} alt={image.headline} />
          <br></br><br></br>
        </Link>
        
      ))}
    </div>
  );
};

export default ImageList;
