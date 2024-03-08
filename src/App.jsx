import "./styles/index.scss";
import { RoutesMain } from "./routes";
import { useContext } from "react";
import { CreateTechForm } from "./components/CreateTechForm";
import { TechContext } from "./providers/TechContext";
import { EditTechForm } from "./components/EditTechForm";

const App = () => {
  const { editingTech } = useContext(TechContext);
  return (
    <>
      <RoutesMain>
        <CreateTechForm />
          {editingTech ? <EditTechForm /> : null}
      </RoutesMain>
    </>
  )
};

export default App;
