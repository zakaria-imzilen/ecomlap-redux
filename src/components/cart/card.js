import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProd } from "../../store";
import "../css/cartcard.css";

const CartCard = (prod) => {
  const data = prod.data;

  const dispatch = useDispatch();

  const addToCartEvent = () => {
    dispatch(addToCart(data));
  };
  const removeProdEvent = () => {
    dispatch(removeProd(data));
  };

  const renderPrice = () => {
    return data.qty * data.price;
  };

  return (
    <div
      className="rounded-3 position-relative cartcard"
      style={{ width: "13rem", height: "10rem" }}
    >
      <img
        src={`${data.image}`}
        className="img-fluid rounded-3 shadow"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt=""
      />
      <span
        className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-primary"
        style={{ zIndex: 1 }}
      >
        x {data.qty}
      </span>
      <div className="position-absolute p-3 bottom-0 left-0 right-0 w-100 text-white gradient">
        {data.title.slice(0, 15)}..
      </div>

      <div className="flex-column gap-2 position-absolute qtyControllers">
        <span className="px-3 bg-light text-dark w-100 rounded text-center">
          {renderPrice()} dh
        </span>

        <div className="d-flex gap-2 align-self-center">
          <button
            type="button"
            class="btn btn-sm btn-primary"
            onClick={addToCartEvent}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            onClick={removeProdEvent}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
