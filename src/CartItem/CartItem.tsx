import Button from '@material-ui/core/Button';
// Types
import { Types } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: Types;
  HandleAddOn: (clickedItem: Types) => void;
  HandleRemove: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, HandleAddOn, HandleRemove}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => HandleRemove(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => HandleAddOn(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;