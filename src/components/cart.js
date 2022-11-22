import { useSelector } from "react-redux";
import CartCard from "./cart/card";

const Cart = ({ windowState, toggleWindow }) => {
  const cartData = useSelector((state) => state.cart);

  const closeWindow = () => {
    windowState ? toggleWindow(false) : toggleWindow(true);
  };

  const renderCartWrapperClasses = () => {
    if (windowState) {
      return "py-3 px-5 container-fluid d-flex justify-content-center align-items-center bg-light bg-gradient border-top border-muted bg-opacity-75 position-sticky bottom-0 right-0 left-0";
    } else {
      return "d-none";
    }
  };

  const renderTotal = () => {
    let total = 0;
    cartData.forEach((prod) => {
      total += prod.qty * prod.price;
    });

    return total.toFixed(2);
  };

  return (
    <div className={`${renderCartWrapperClasses()}`} id="cart">
      <div className="position-relative w-100">
        <h2 className="h2 text-center display-3">Cart</h2>
        <div
          id="cartItemsWrapper"
          className="my-5 container d-flex gap-3 flex-wrap justify-content-center position-relative"
          style={{ maxWidth: "80vw", maxHeight: "60vh", overflow: "hidden" }}
        >
          {cartData
            .map((prod) => <CartCard key={prod.id} data={prod} />)
            .sort()}
        </div>

        <button
          className="btn btn-danger rounded-circle position-absolute top-0 right-0"
          onClick={closeWindow}
        >
          x
        </button>

        <h4 className="h4 display-6 text-center">Total: {renderTotal()} MAD</h4>
      </div>
    </div>
  );
};

export default Cart;
