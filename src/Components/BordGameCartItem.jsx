/* eslint-disable react/prop-types */
import Button from "../Styles/Button.module.css"

const BordGameCartItem = ({cartBGItem, addBGToCart, decrementBGFromCart, removeBGFromCart}) => {
  const { boardGame, cant} = cartBGItem;
  return (
      <>
          <li>
              <span>{boardGame.title} , genero: {boardGame.genre}</span>
              {
                cant>1?<button onClick={()=>decrementBGFromCart(boardGame)}>➖</button>:<button className={Button.disabled}>➖</button>
            }            
            <span>{cant}</span>
            <button onClick={()=>addBGToCart(boardGame)}>➕</button>
            <span>| </span>
            <button onClick={()=>removeBGFromCart(boardGame)} className={Button.remove}>🗑️</button>
          </li>
      </>
  );
}

export default BordGameCartItem;