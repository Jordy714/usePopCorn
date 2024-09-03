import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState()
  return (
    <div>
      <StarRating color='blue' onSetRating={setMovieRating} />
      <p>{movieRating ? `Hola esta pelicula fue puntuada con ${movieRating} estrellas` : 'Porfavor puntua esta Pelicula'}</p>
      <StarRating color='blue' onSetRating={setMovieRating} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

