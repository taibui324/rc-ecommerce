import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { Types } from '../App';

type Props = {
  cartItems: Types[];
  HandleAddOn: (clickedItem: Types) => void;
  HandleRemove: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, HandleAddOn, HandleRemove }) => {
  const total = (items: Types[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          HandleAddOn={HandleAddOn}
          HandleRemove={HandleRemove}
        />
      ))}
      <h2>Total: ${total(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;