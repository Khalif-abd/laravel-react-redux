import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Auth } from "../redux/action/authAction";
import { useSelector } from "react-redux";

const Form = () => {
    const auth = useSelector(state=>state);

    const dispatch = useDispatch();
    const { register, getValues } = useForm();

    return (
        <div className="form">
        <form className="form-horizontal" >

            <div className="form-group">
                <div className="col-sm-10">
                    <input type="text" name="email"  className="form-control" ref={register} placeholder="Логин" />
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-10">
                    <input type="password" name="password" className="form-control" ref={register} placeholder="Пароль"/>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" onClick ={
                      () => {
                        if(!getValues().email || !getValues().password) {
                            alert('Заполните все поля!')
                            return false;
                        }
                        dispatch(Auth(getValues()));
                    }
                    } className="btn btn-primary btn-sm" >Войти</button>
                </div>
            </div>

        </form>
    </div>
    );
}
export default Form;
