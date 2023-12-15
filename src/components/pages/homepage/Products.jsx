import { useEffect, useState } from "react";
import ProductCard from "../../component/ProductCard";
import axios from "axios";
import { BASE_URL } from "../../../constants/index";

const Products = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(`${BASE_URL}/hot-products`);
    if (response.status === 200) {
      if (response.data.status === "success") {
        setData(response.data.data);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="hot-products">
      <h3 className="title">
        <strong>Hot</strong> Products
      </h3>
      <div className="control">
        <a id="prev_hot" className="prev" href="#">
          &lt;
        </a>
        <a id="next_hot" className="next" href="#">
          &gt;
        </a>
      </div>

      <div className="row">
        {data.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Products;
