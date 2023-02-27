

import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import YouTube from 'react-youtube';
import Header from './Header';
import Footer from './footer';



function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2b50da6f0df32f27186fed90d20f90ae";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);




  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    //console.log('data',results);
    //setSelectedMovie(results[0])

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };


  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    // const data = await fetchMovie(movie.id)
    // console.log(data);
    // setSelectedMovie(movie)
    fetchMovie(movie.id);

    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div >
         <Header />

      <h2  className="texto text-center mt-5 mb-5">Prueba tecnicas</h2>

      {/* el buscador */}
      <form className="text-center container mb-4" onSubmit={searchMovies}>

        <input  className="text-center btn btn-outline-light"
          type="text"
          placeholder="Buscador"
          onChange={(e) => setSearchKey(e.target.value)}
        />
         <button className="text-center btn btn-outline-light">Buscar Pelicula</button>
      </form>


      <div>


      </div>

      {/* contenedor para mostrar los posters y las peliculas en la peticion a la api */}
      <div  className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="col-md-4 mb-3"
              onClick={() => selectMovie(movie)}
            >
               <main>
          {movie ? (
            <div
              className=" background-image background-imageviewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="text-center">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Ver mas
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className=" text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
              <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
              />

              <h4 className="textotitulos text-center">{movie.title}</h4>

              <h2  key={movie.id} className="textopromedio texto text-center" >Promedio de votos : {movie.vote_average}</h2>



            </div>

          ))}
        </div>
      </div>
      <Footer />
    </div>


  );
}


export default App;
