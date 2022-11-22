import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { addToCart } from "../store";

const ProductCard = (prod) => {
  const dispatch = useDispatch();

  const data = prod.prod;

  const location = useLocation();
  const history = useHistory();

  const addToCartEvent = () => {
    dispatch(addToCart(data));

    if (location.pathname.includes("product")) {
      history.push("/");
    }
  };

  return (
    <div
      className="py-3 px-2 card d-flex flex-wrap prod"
      style={{
        width: "16rem",
        minHeight: "10rem",
        overflow: "hidden",
      }}
      key={data.id}
    >
      <img
        className="row w-50 m-auto row"
        src={data.image}
        alt={data.description}
        style={{ objectFit: "cover" }}
      />
      <div className="mt-4 px-2 py-3 row border-top border-muted row">
        <Link to={`/product/${data.id}`}>
          <h5 className="mb-0">{data.title}</h5>
          <h6 className="mt-0 mb-3 fw-light text-uppercase text-end">
            {data.category}
          </h6>
          <p
            className="card-text"
            style={{
              fontSize: ".8rem",
            }}
          >
            {data.description}
          </p>
        </Link>
      </div>
      <div className="m-auto">
        <button
          onClick={addToCartEvent}
          className="ms-1 btn btn-outline-success justify-self-center btn-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
