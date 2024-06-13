import { Form } from "./components/Form.component";
import { Logo } from "./components/Logo.component";
import { PackingList } from "./components/PackingList.component";
import { Stats } from "./components/Stats.component";

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};
