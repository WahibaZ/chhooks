// Filter.js
import React, { useState } from 'react';
/* les deux parametres envoyes par le composant pere sont recus soua forme de props */
function Filter({ onFilterTitle, onFilterRating }) {
  return (
    <div >
      <input
        type="text"
        placeholder="Filter by title"
        /* la fonction possede un parametre qui est le value de zone de texte */
        onChange={(e) => onFilterTitle(e.target.value)} 
        /* e cest levenement target est lelemt html qui a declanche cetteevenement et value est le contenu */
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onFilterRating(e.target.value)}
        min="1"
        max="5"
      />
    </div>
  );
}

export default Filter;
