import { Item } from "./Item.component";
import { Item as ItemType } from "../types/item.type";
export const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
}: {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          ></Item>
        ))}
      </ul>
    </div>
  );
};
