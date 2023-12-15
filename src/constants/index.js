export const BASE_URL = "http://localhost:8000";
export const convertToUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
