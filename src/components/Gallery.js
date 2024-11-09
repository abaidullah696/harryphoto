import React from "react";
import "../style/Gallery.css";

function Gallery() {
  const images = [
    "https://img.freepik.com/free-vector/floral-abstract-background_1017-325.jpg?ga=GA1.1.1818626202.1724325143&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/hand-drawn-flowers-blackboard-background_23-2148400469.jpg?ga=GA1.1.1818626202.1724325143&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?ga=GA1.1.1818626202.1724325143",
    "https://img.freepik.com/premium-photo/searchlight-neon-brick-wall-with-smoke-neon-reflections-wet-asphalt-empty-scene-with-copy-space_117255-1836.jpg?ga=GA1.1.1818626202.1724325143",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401044.jpg?ga=GA1.1.1818626202.1724325143&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/blue-futuristic-networking-technology-vector_53876-151537.jpg?ga=GA1.1.1818626202.1724325143&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148501044.jpg?ga=GA1.1.1818626202.1724325144",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401144.jpg?ga=GA1.1.1818626202.1724325144",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401034.jpg?ga=GA1.1.1818626202.1724325144&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401124.jpg?ga=GA1.1.1818626202.1724325144&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401014.jpg?ga=GA1.1.1818626202.1724325144&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/abstract-background-with-flowers_23-2148401134.jpg?ga=GA1.1.1818626202.1724325144&semt=ais_hybrid",
  ];

  return (
    <div className="image-gallery">
      {images.map((imag, index) => (
        <div key={index} className="image-item">
          <img src={imag} alt={`Imag ${index + 1}`} />
          <div className="play-button">▶</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
