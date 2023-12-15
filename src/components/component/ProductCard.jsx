import { convertToUSD } from "../../constants";

const ProductCard = ({ item }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="products">
        <div className="offer">- %20</div>
        <div className="thumbnail">
          <a href={item.slug}>
            <img src={item.productImg} alt={item.productName} />
          </a>
        </div>
        <div className="productname">{item.productName}</div>
        <h4 className="price">{convertToUSD.format(item.price)}</h4>
        <div className="button_group">
          <button className="button add-cart" type="button">
            Add To Cart
          </button>
          <button className="button compare" type="button">
            <i className="fa fa-exchange"></i>
          </button>
          <button className="button wishlist" type="button">
            <i className="fa fa-heart-o"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
