import axios from "../helpers/axios";
import { productConstansts } from "./constants";



export const addProduct = (form) => {

  return async (dispatch) => {
    dispatch({ type: productConstansts.ADD_PRODUCT_REQUEST});
    const res = await axios.post("product/create", form);
    console.log(res);
    if (res.status === 201) {
      dispatch({
        type: productConstansts.ADD_PRODUCT_SUCCESS,
        payload: { product: res.data.product },
      });
    } else {
      dispatch({
        type: productConstansts.ADD_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
