import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import reducer from "./reducer";

import { InitialReducerType } from "./initialReducer";
import { DISCOUT_CODES } from "./discoutCodes";

import { productsData } from "./data";

const initialState = {
  totalAmount: 0,
  totalCount: 0,
  data: productsData,
  selectedItems: productsData,
};

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("productsState"))) ||
      initialState
  );

  const [discountValue, setDiscountValue] = useState("");
  const [discount, setDiscount] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("discount"))) ||
      ""
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("productsState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem("discount", JSON.stringify(discount));
  }, [discount]);

  const checkDiscoutCode = (e) => {
    e.preventDefault();
    if (!discountValue.length) return;

    if (DISCOUT_CODES.includes(discountValue)) setDiscount(discountValue);
    setDiscountValue("");
  };

  const addToBusket = (productId) => {
    dispatch({ type: InitialReducerType.ADD_PRODUCT, payload: { productId } });
    dispatch({ type: InitialReducerType.GET_TOTALS });
  };

  const filterData = (searchTerm) => {
    dispatch({
      type: InitialReducerType.FILTER_PRODUCTS,
      payload: { searchTerm, productsData },
    });
  };

  const removeItem = (productId, removeAllItems = false) => {
    dispatch({
      type: InitialReducerType.REMOVE_ITEM,
      payload: { productId, removeAllItems },
    });
    dispatch({ type: InitialReducerType.GET_TOTALS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToBusket,
        discountValue,
        discount,
        setDiscount,
        setDiscountValue,
        checkDiscoutCode,
        searchTerm,
        setSearchTerm,
        removeItem,
        filterData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
