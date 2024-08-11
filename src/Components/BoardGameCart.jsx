/* eslint-disable react/prop-types */
import BoardGameCartItem from '../Components/BordGameCartItem';
import Button from "../Styles/Button.module.css";
import { useState} from "react";

const BoardGameCart = ({cartBG, addBGToCart,decrementBGFromCart, removeBGFromCart}) => {
  const total = cartBG.reduce((sum, cartBGItem) => { return sum+= cartBGItem.boardGame.price*cartBGItem.cant}, 0);
  const [isPurchase, setIsPurchase] = useState(false);
  return (
    <>
      <h3>BoardGameCart</h3>
      {
        !isPurchase && (
        <>
          {
            <>
              {
                cartBG.length > 0 ? (
                  <>
                    <button className={Button.remove} onClick={()=> setIsPurchase(true)}>Iniciar Compra</button>
                    <ul>
                        {cartBG.map(cartItem =>(
                            <BoardGameCartItem key={cartItem.boardGame.id} cartBGItem={cartItem} addBGToCart={addBGToCart} decrementBGFromCart={decrementBGFromCart} removeBGFromCart={removeBGFromCart} />
                        ))}
                    </ul>
                    <h2>Total: $ {total.toFixed(2)}</h2>
                  </>
                ) : <h3>Agregue items al carrito</h3>
              }
            </>
          }
        </>
        )
      }
      {
        isPurchase && (
          <>
            <button className={Button.remove} onClick={()=> setIsPurchase(false)}>Volver al carrito</button>
          </>
        )
      }
    </>  
  )
}

export default BoardGameCart;