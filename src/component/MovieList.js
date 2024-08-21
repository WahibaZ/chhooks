
import React, { useEffect } from 'react'
import MovieData from "./MovieData";
import MovieCard from "./MovieCard";
import { useState } from 'react';

import Filter from './Filter ';
import AddMovie from "./AddMovie";




function MovieList() {
  const [movies, setMovies] = useState(MovieData);  /*state pour l'affichage :Liste complète des films*/
  const [filteredMovies, setFilteredMovies] = useState(MovieData);
  const [filterName, setFilterName] = useState(''); // Titre pour le filtrage
  const [filterRating, setFilterRating] = useState(''); // Note pour le filtrage

 // Utilisation de useEffect pour mettre à jour le filtrage à chaque fois que les films ou les filtres changent
   // Update filteredMovies whenever movies or filter criteria change
   useEffect(() => {
    handleFilter(filterName, filterRating);
  }, [movies, filterName, filterRating]);


 /*  Cette fonction applique les critères de filtrage aux films (movies) en fonction du titre (filterTitle) 
  et de la note (filterRating) et met à jour l'état filteredMovies avec les films qui correspondent aux critères. */
 
  const handleFilter = (name = '', rating = '') => {
    console.log('Filtering with title:', name);
    console.log('Filtering with rating:', rating);

    const filtered = movies.filter((movie) =>
      (name ? movie.name.toLowerCase().includes(name.toLowerCase()) : true) &&
      (rating ? movie.rating >= parseFloat(rating) : true)
    );

    console.log('Filtered movies:', filtered);
    setFilteredMovies(filtered);
  };


const handleFilterName = (name) => {
  setFilterName(name); // Met à jour le titre du filtre
};

const handleFilterRating = (rating) => {
  setFilterRating(rating); // Met à jour la note du filtre
};
  const handleAddMovie=(newMovie)=>{

  
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  /* L'état showAddMovieForm contrôle la visibilité du formulaire. */
  const toggle = () => {
    setShowAddMovieForm((prev) => !prev);
    console.log("toggled");
  };
  
  /* L'état newMovie stocke les données du film que l'utilisateur souhaite ajouter. */
  const [newMovie, setNewMovie] = useState({
    name: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  return (
    <div>
     
       <Filter onFilterTitle={handleFilterName} onFilterRating={handleFilterRating} />
      
      {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} mov={movie} />
            ))}


     {/* <AddMovie onAddMovie={handleAddMovie}/> */}
     <button onClick={toggle}>
  {showAddMovieForm ? 'Cancel' : 'Add Movie'}
</button>
{showAddMovieForm && 
  <div><AddMovie
          newMovie={newMovie} /* Les données actuelles du nouveau film. */
          setNewMovie={setNewMovie}
          setMovies={setMovies} /* La liste des films dans le composant parent est mise à jour avec setMovies. */
          onClose={toggle} /* onClose : La fonction pour fermer le formulaire, 
          qui est la même fonction toggle utilisée pour afficher ou cacher le formulaire. */
        />
  </div>
}
       
    </div>
  )
}

export default MovieList
