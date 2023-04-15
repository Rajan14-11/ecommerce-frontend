import axios from "../helpers/axios";
import { categoryConstansts, initialDataConstants, productConstansts } from "./constants";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post("/initialdata");
    if (res.status === 200) {
        const {categories,products} = res.data
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload:{categories}
      });
      dispatch({
        type: productConstansts.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products},
      });
    } else {
      dispatch({
        type: initialDataConstants.GET_ALL_INITIAL_DATA_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
