import { Route } from "react-router-dom";
import Home from "./components/home";
import ProductPage from "./components/productPage";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductPage} />
    </div>
  );
};

export default App;
