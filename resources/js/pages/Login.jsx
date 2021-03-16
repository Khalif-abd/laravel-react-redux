import React from 'react';
import Form from '../components/Form';
import { Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

const Login = () => {

    let auth = useSelector((state) => state.GetAuth.is_auth);

    return !auth? (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Form/>
                </div>
            </div>
        </div>
    )
        :
        <Redirect to={'/home'} />
}

export default Login;
