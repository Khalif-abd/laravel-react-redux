import axios from "axios";

export function GetCurrency(from,to) {
    !from? from = to : true
  return async (dispatch) => {
      await dispatch({
        type: "LOAD_CURRENCY",
      });

      const res = await axios.get(`/api/currency?dateFrom=${from}&dateTo=${to}`, {
          headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      await dispatch({
        type: "GET_CURRENCY",
        payload: res.data,
      });
    }

}
