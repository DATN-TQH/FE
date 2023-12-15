import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CheckoutPage from "../pages/CheckoutPage";
import MyLayout from "../components/layouts";
import CheckinPage from "../pages/CheckinPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkin" element={<CheckinPage />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;
