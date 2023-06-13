import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetails = ({ images }) => {
  const { id } = useParams();
  const image = images.find((image) => image.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      
      <h1>{image.headline}</h1>
      <img src={image.url} alt={image.headline} />
     
      <h2>{image.subline}</h2>
      <p>{image.story}</p>
    </div>
  );
};

export default ImageDetails;
