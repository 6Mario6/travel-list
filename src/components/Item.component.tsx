import { type Item as ItemType } from "../types/item.type";
export const Item = ({
  item,
  onDeleteItem,
}: {
  item: ItemType;
  onDeleteItem: (id: number) => void;
}) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};
