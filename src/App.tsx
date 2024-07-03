import { useState } from "react";
import { Form } from "./components/Form.component";
import { Logo } from "./components/Logo.component";
import { PackingList } from "./components/PackingList.component";
import { Stats } from "./components/Stats.component";
import { Item } from "./types/item.type";

const initialItems: Item[] = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 7, packed: true },
  { id: 4, description: "T-Shirts", quantity: 3, packed: false },
];
export const App = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleAddItems = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        items={items}
      />
      <Stats />
    </div>
  );
};
