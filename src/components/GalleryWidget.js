// src/components/GalleryWidget.js
import React, { useState } from 'react';

const GalleryWidget = () => {
  const [photos, setPhotos] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const addImage = () => {
    if (imageUrl) {
      setPhotos([...photos, imageUrl]);
      setImageUrl('');
    }
  };

  return (
    <div className="widget gallery-widget">
      <div className="gallery-photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`gallery-item-${index}`} />
        ))}
      </div>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
      />
      <button className="add-image-btn" onClick={addImage}>
        Add Image
      </button>
    </div>
  );
};

export default GalleryWidget;
