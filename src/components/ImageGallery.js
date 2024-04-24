// ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.scss'; // Import Sass file for styling

const ImageGallery = () => {
  const [fullscreen, setFullscreen] = useState(false); // State to track fullscreen mode

  const handleImageClick = () => {
    setFullscreen(!fullscreen); // Toggle fullscreen mode
  };

  return (
    <div className="image-gallery">
      <div className={fullscreen ? 'fullscreen-image' : 'thumbnail-image'} onClick={handleImageClick}>
        <img src="path_to_your_image.jpg" alt="Your Image" />
      </div>
    </div>
  );
};

export default ImageGallery;
