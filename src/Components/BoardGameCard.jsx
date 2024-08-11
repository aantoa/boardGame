/* eslint-disable react/prop-types */
import CardStyles from "../Styles/Card.module.css"
const BoardGameCard = ({bg, addBoardGamesToFavorite, favoriteBoardGames, removeBGFromFavorite, addBGToCart}) =>{
    const { title, genre, image_url, number_of_players, price} = bg;
    const isFavoriteBoardGames = favoriteBoardGames.find((f)=> f.id === bg.id );

    return (
        <div className={CardStyles.card}>
            <h3 className={CardStyles.cardTitle}>{title}</h3>
            <h3 className={CardStyles.cardGenre}>Genero: {genre}</h3>
            <h4 className={CardStyles.cardDetails}>Cantidad de Jugadores: {number_of_players}</h4>
            <img className={CardStyles.cardImg} src={image_url} alt={title} />
            <h4 className={CardStyles.cardPrice}>Precio: ${price}</h4>
            {
                !isFavoriteBoardGames ? (
                    <button onClick={()=>addBoardGamesToFavorite(bg)} >🤍</button>
                ) : <button onClick={()=>removeBGFromFavorite(bg)}>💛</button>
            }
            <button onClick={()=>addBGToCart(bg)}>🛒</button>
        </div>
    );
};

export default BoardGameCard;