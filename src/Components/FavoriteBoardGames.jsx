/* eslint-disable react/prop-types */
import BoardGameItem from "./BoardGameItem";

const FavoriteBoardGame = ({favorites, removeBGFromFavorite}) => {
    return(
        <>
            <h3>En Favorite BoardGame</h3>
            <ul>
                {favorites.map(f =>(
                    <BoardGameItem key={f.id} f={f} removeBGFromFavorite={removeBGFromFavorite}/>
                ))}
            </ul>
        </>
    )
}

export default FavoriteBoardGame;