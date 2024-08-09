/* eslint-disable react/prop-types */
import BoardGameCartItem from '../Components/BordGameCartItem';

const BoardGameCart = ({cartBG, addBGToCart,decrementBGFromCart, removeBGFromCart}) => {
  return (
    <>
      <h3>BoardGameCart</h3>
      <ul>
          {cartBG.map(cartItem =>(
              <BoardGameCartItem key={cartItem.boardGame.id} cartBGItem={cartItem} addBGToCart={addBGToCart} decrementBGFromCart={decrementBGFromCart} removeBGFromCart={removeBGFromCart} />
          ))}
      </ul>
      </>
  )
}

export default BoardGameCart;