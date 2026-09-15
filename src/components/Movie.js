import "./Movie.css";

function Movie(props) {
    const { Title, Year, Type, Poster } = props;

    return (
        <div className="card">
            {
                // Poster === "https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg" ? <img src="https://picsum.photos/300/444??blur=2" /> : <img src={Poster} alt="" />
                Poster === "https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg" ? <img src="https://placehold.co/300x444/silver/silver" alt="" /> : <img src={Poster} alt="" />
            }

            
            <div>
                <h3>{Title}</h3>
                <p>{Year} <span>{Type}</span></p>
            </div>
        </div>
    )
}

export default Movie;