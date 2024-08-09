import board_games from "../Data/board_games.json";
import { useState} from "react";
import BoardGamesPanel from "../Components/BoardGamesPanel";
import FavoriteBoardGame from "../Components/FavoriteBoardGames";
import BoardGameCart from "../Components/BoardGameCart";

const BoardGamesPage = () => {
    const [favoriteBoardGames, setFavoriteBoardGames] = useState([]);
    const [tab, setTab] = useState(0)

    const addBoardGamesToFavorite = (boardGame) => {

        setFavoriteBoardGames([...favoriteBoardGames, boardGame]);
    }

    const removeBGFromFavorite = (boardGame) =>{
        setFavoriteBoardGames(favoriteBoardGames.filter(item => item.id !== boardGame.id));
    }

    return (
        <>
            <BoardGamesPanel bgs={board_games} addBoardGamesToFavorite={addBoardGamesToFavorite} favoriteBoardGames={favoriteBoardGames} removeBGFromFavorite={removeBGFromFavorite}/>
            
            <div>
                <button onClick={()=>setTab(0)}>Favorite BoardGame</button>
                <button onClick={()=>setTab(1)}>Cart BoardGame</button>
            </div>
            <div>
                { tab === 0 && <FavoriteBoardGame favorites={favoriteBoardGames} removeBGFromFavorite={removeBGFromFavorite} /> }
                { tab === 1 && <BoardGameCart/>}
            </div>
            

        </>
    )
}

export default BoardGamesPage;