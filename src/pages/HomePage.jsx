import Slider from "../components/pages/homepage/Slider";
import Banner from "../components/pages//homepage/Banner";

import Cart from "../components/pages/cart/Cart";
import Products from "../components/pages/homepage/Products";

function HomePage() {
  return (
    <>
      <Slider />
      <Banner />
      <div className="container">
        <Products />
      </div>
    </>
  );
}
export default HomePage;
