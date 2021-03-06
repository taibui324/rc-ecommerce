import Button from '@material-ui/core/Button';
// Types
import { Types } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: Types;
  HandleAddOn: (clickedItem: Types) => void;
};

const Item: React.FC<Props> = ({ item, HandleAddOn}) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => HandleAddOn(item)}>Add </Button>
  </Wrapper>
);

export default Item;