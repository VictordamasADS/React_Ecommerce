import React from 'react';
import CartItem from '../CartItem/CartItem';
import { BagIcon, Button, FinishBuy, Wrapper } from './cartStyles';
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <>
      <Wrapper>
        <h1>Carrinho de compras <BagIcon/></h1>
        {cartItems.length === 0 ? <p>Nenhum produto selecionado.</p> : null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h3>Total: R${calculateTotal(cartItems).toFixed(2)}</h3>
      </Wrapper>
      <FinishBuy>
        <Button>Finalizar Compra</Button>
      </FinishBuy>
    </>
  );
};

export default Cart;