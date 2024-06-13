import { type Item as ItemType } from "../types/item.type";
import { Item } from "./Item.component";

const initialItems: ItemType[] = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 7, packed: false },
  { id: 4, description: "T-Shirts", quantity: 3, packed: false },
];
export const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </ul>
    </div>
  );
};
