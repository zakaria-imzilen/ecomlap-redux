import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store";
import Cart from "./cart";
import ProductCard from "./productCard";

const Home = () => {
  const dispatch = useDispatch();

  dispatch(fetchData);
  const data = useSelector((state) => state.products);
  const cartData = useSelector((state) => state.cart);

  const [window, setWindow] = useState(false);

  const controlWindow = () => {
    setWindow(!window);
  };

  return (
    <div className="position-relative">
      <div className="container-fluid bg-dark text-light text-center py-4">
        <h1 className="fw-light">Ecom App, built using ⚛ React & Redux</h1>
      </div>
      <div
        className="container-fluid py-4 m-auto text-center position-sticky top-0 bg-mute"
        style={{ zIndex: 100, backdropFilter: "blur(10px)" }}
      >
        <button
          type="button"
          className="btn btn-dark position-relative"
          onClick={() => setWindow(true)}
        >
          <i className="bi bi-cart3"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark bg-light">
            {cartData.length}
          </span>
        </button>
      </div>
      <div className="container d-flex flex-wrap gap-4 justify-content-center">
        {data.map((prodData) => (
          <ProductCard prod={prodData} key={prodData.id} />
        ))}
      </div>
      <Cart windowState={window} toggleWindow={controlWindow} />
    </div>
  );
};

export default Home;
