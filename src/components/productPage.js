import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDataProd } from "../store";
import ProductCard from "./productCard";

import "./css/productPage.css";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const selectorData = useSelector((state) => state.prod);

  useEffect(() => {
    dispatch(fetchDataProd(params["id"]));
  }, []);

  return (
    <main className="d-flex flex-column gap-4 align-items-center justify-content-center">
      <ProductCard prod={selectorData} />
      <Link to="/">
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-dark">Back</button>
        </div>
      </Link>
    </main>
  );
};

export default ProductPage;
