import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { setTheme } from "./themeSlice";
import { AppDispatch, RootState } from "app/redux/store";
import { loadProducts } from "../products/productsSlice";
import { getProducts } from "app/products/getProducts";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  // const useAppDispatch = () => useDispatch<AppDispatch>();
  const useAppDispatch: AppDispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);
  const products = useSelector((state: RootState) => state.product.list);
  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  const HandleLoadingProducts = () => {
    useAppDispatch(loadProducts());
  };
  return (
    <>
      <Typography variant="h1" color="initial">
        {theme}
      </Typography>
      <Typography variant="h2" color="primary">
        {products ? "has products" : "no products"}
      </Typography>
      <Button variant="contained" color="secondary" onClick={toggleTheme}>
        test switch theme
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={HandleLoadingProducts}
      >
        test load products
      </Button>
    </>
  );
};
