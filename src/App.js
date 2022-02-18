import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ItemDetails } from "./components/ItemDetails";

function App() {
  return (
    <div className="max-w-md h-screen m-auto">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id">
          <ItemDetails />
        </Route>
              </Switch>
    </div>
  );
}

export default App;
