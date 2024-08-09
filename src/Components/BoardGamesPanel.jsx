/* eslint-disable react/prop-types */
import BoardGameCard from "./BoardGameCard";

const BoardGamesPanel = ({bgs, addBoardGamesToFavorite, favoriteBoardGames, removeBGFromFavorite})=> {
    return (
        <div>
            <h2>Lista de juegos de mesa</h2>
            <div className="list-container">
                {bgs.map((bg) =>(
                    <BoardGameCard key={bg.id} bg={bg} addBoardGamesToFavorite={addBoardGamesToFavorite} favoriteBoardGames={favoriteBoardGames} removeBGFromFavorite= {removeBGFromFavorite}/>
                ))}
            </div>
        </div>
    )
}

export default BoardGamesPanel;
