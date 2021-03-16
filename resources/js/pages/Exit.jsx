import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import {Exit} from "../redux/action/authAction";
import {Redirect} from "react-router-dom";


const LogOut = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Exit())
    },[dispatch]);

    localStorage.removeItem('token');

    return <Redirect to={"/login"} />;

}
export default LogOut;
