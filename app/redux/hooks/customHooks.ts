import { AppDispatch, RootState } from "app/redux/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
