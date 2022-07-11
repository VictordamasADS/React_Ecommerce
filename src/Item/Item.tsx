import { CartItemType } from '../App';
import { Wrapper, Button, CartButton } from './itemStyles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.photo} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <h5>{item.brand}</h5>
      <p>{item.description}</p>
      <h3>R${item.price}</h3>
      <Button onClick={() => handleAddToCart(item)}>Adicionar ao <CartButton/></Button>
    </div>
  </Wrapper>
);

export default Item;