import board_games from "../Data/board_games.json";
import { useState} from "react";
import BoardGamesPanel from "../Components/BoardGamesPanel";
import FavoriteBoardGame from "../Components/FavoriteBoardGames";
import BoardGameCart from "../Components/BoardGameCart";
import TabBoard from "../Styles/Tab.module.css"

const BoardGamesPage = () => {
    const [favoriteBoardGames, setFavoriteBoardGames] = useState([]);
    const [tab, setTab] = useState(0);
    const [cart, setCart] = useState([]);

    const addBoardGamesToFavorite = (boardGame) => {

        setFavoriteBoardGames([...favoriteBoardGames, boardGame]);
    }

    const removeBGFromFavorite = (boardGame) =>{
        setFavoriteBoardGames(favoriteBoardGames.filter(item => item.id !== boardGame.id));
    }

    const addBGToCart = (boardGame) => {
        const index = cart.findIndex(cartItem => cartItem.boardGame.id == boardGame.id);
        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].cant++;
            setCart(newCart);
        } else {
            setCart([...cart, { boardGame: boardGame, cant: 1 }]);
        }
    }

    const decrementBGFromCart = (boardGame) =>{
        const index = cart.findIndex(cartItem => cartItem.boardGame.id == boardGame.id );
        if (index !== -1) {
            if(cart[index].cant > 1){
                const newCart = [...cart];
                newCart[index].cant--;
                setCart(newCart);
            } else{
                setCart(cart.filter(cartItem=> cartItem.boardGame.id !== boardGame.id));
            }
        }
    }

    const removeBGFromCart = (boardGame)=>{
        setCart(cart.filter(cartItem=> cartItem.boardGame.id !== boardGame.id));
    }

    return (
        <>
            <BoardGamesPanel bgs={board_games} addBoardGamesToFavorite={addBoardGamesToFavorite} favoriteBoardGames={favoriteBoardGames} removeBGFromFavorite={removeBGFromFavorite} addBGToCart={addBGToCart} />
            
            <div className={TabBoard.tab}>
                <button onClick={()=>setTab(0)} className={ tab == 0 ? TabBoard.active : ""}>Favorite BoardGame</button>
                <button onClick={()=>setTab(1)} className={ tab == 1 ? TabBoard.active : ""}>Cart BoardGame</button>
            </div>
            <div>
                { tab === 0 && <FavoriteBoardGame favorites={favoriteBoardGames} removeBGFromFavorite={removeBGFromFavorite} /> }
                { tab === 1 && <BoardGameCart cartBG={cart} addBGToCart={addBGToCart} decrementBGFromCart={decrementBGFromCart} removeBGFromCart={removeBGFromCart} />}
            </div>
            

        </>
    )
}

export default BoardGamesPage;