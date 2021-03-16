import axios from "axios";

export function Auth(data) {
  return async (dispatch) => {
  const res = await axios.post('http://localhost/api/login', data)
    try {
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            await dispatch({
                type: "AUTH",
                payload: {
                    is_auth: true,
                    token: res.data.token,
                },
            });
        }
    } catch (e) {
      console.log("Ошибка авторизации");
    }
  };
}


export function isAuth() {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if(token) {
        await dispatch({
            type: "AUTH",
            payload: {
                is_auth: true,
                token: token,
            },
        })
    }
  }
}

export function Exit() {
    return async (dispatch) => {
        await dispatch({
            type:"EXIT",
            payload: {
                is_auth:false,
                token:null,
            },
        })
        await dispatch({
            type:"DEL_CURRENCY",
            payload: {
                data:[],
                loading:false,
            },
        })
    }
}

