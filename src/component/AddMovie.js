import React ,{useState} from 'react'

function AddMovie({ newMovie, setNewMovie, setMovies, onClose  }) {

  /* permet de mettre à jour une seule propriété de l'objet d'état newMovie 
  sans effacer les autres propriétés. */
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewMovie((prevMovie) => ({
        ...prevMovie, /* fait une copie de toutes les propriétés de l'objet prevMovie */
        [name]: value,  /* met à jour ou ajoute la propriété dont le nom est la valeur de 
        name (qui provient de e.target.name) avec la nouvelle valeur 
        value (qui provient de e.target.value). */
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); /* Empêcher le comportement par défaut du formulaire */
      console.log("Form submitted");
      console.log('New movie state:', newMovie);
  
      // Ensure all fields are filled out
      if (!newMovie.name || !newMovie.type || !newMovie.date || !newMovie.rating  ||!newMovie.image ||  !newMovie.description || !newMovie.seasons) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Create new movie object with a unique ID
      const newMovieWithId = {
        ...newMovie,
        id: Date.now(), /* génère un identifiant unique basé sur 
        le nombre de millisecondes écoulées depuis le 1er janvier 1970. */
      };
  
      //  Ajouter le nouveau film à la liste des films existants.
      setMovies((prevMovies) => [...prevMovies, newMovieWithId]);
  
      // Reset the form fields
      setNewMovie({
        name: "",
        type: "",
        date: "",
        rating: "",
        image: "",
        description: "",
        seasons: "",
      });
  
      // Close the form
      if (onClose) onClose();  /* vérifie si onClose est défini (non undefined ou null), puis l'appelle. */
    
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Add New Movie</h2>
          <label>Name:
            <input type="text" name="name" value={newMovie.name} onChange={handleChange} required />
          </label>
          <br />
          <label> Type:
            <input type="text" name="type" value={newMovie.type} onChange={handleChange} required/>  
          </label>
          <br />
          <label>Date:
            <input type="date" name="date" value={newMovie.date} onChange={handleChange} required/>
          </label>
          <br />
          <label>Rating:
            <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} required/>
          </label>
          <br />
          <label>Image URL:
            <input type="text" name="image" value={newMovie.image} onChange={handleChange} required/>
          </label>
          <br />
          <label>Description:
            <textarea name="description" value={newMovie.description} onChange={handleChange} required/>
          </label>
          <br />
          <label>Seasons:
            <input type="number" name="seasons" value={newMovie.seasons} onChange={handleChange} required/>
          </label>
          <br />
          <button type="submit">Add Movie</button>
          <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  )
}

export default AddMovie
