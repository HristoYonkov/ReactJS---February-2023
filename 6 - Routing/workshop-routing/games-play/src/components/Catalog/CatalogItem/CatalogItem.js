import { Link } from "react-router-dom";


export const CatalogItem = ({
    name,
    imageUrl,
    genre,
    id
}) => {

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{genre}</h6>
                <h2>{name}</h2>
                <Link to={`/details/${id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}