import { genre} from ".";

export default function MovieCard({ data }) {
  // You need to write the get genre function which will return genre from genre list
  const getGenre = (genre, idsArray) => {

  };
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt="movie"
      />
      <div className="info">
        <h4 className="title">{data.original_title}</h4>
        <h6 className="genre">{getGenre(genre,data.genre_ids)}</h6>
      </div>
    </div>
  );
}
