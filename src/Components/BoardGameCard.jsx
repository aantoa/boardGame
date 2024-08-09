/* eslint-disable react/prop-types */
import CardStyles from "../Styles/Card.module.css"
const BoardGameCard = ({bg, addBoardGamesToFavorite, favoriteBoardGames, removeBGFromFavorite}) =>{
    const { title, genre, image_url, number_of_players} = bg;
    const isFavoriteBoardGames = favoriteBoardGames.find((f)=> f.id === bg.id );

    return (
        <div className={CardStyles.card}>
            <h3 className={CardStyles.cardTitle}>{title}</h3>
            <h3>Genero: {genre}</h3>
            <h4>Cantidad de Juegadores: {number_of_players}</h4>
            <img src={image_url} alt={title} />
            {
                !isFavoriteBoardGames ? (
                    <button onClick={()=>addBoardGamesToFavorite(bg)} >🤍</button>
                ) : <button onClick={()=>removeBGFromFavorite(bg)}>💛</button>
            }
        </div>
    );
};

export default BoardGameCard;