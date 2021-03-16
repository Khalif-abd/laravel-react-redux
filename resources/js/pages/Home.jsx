import React from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector} from "react-redux";
import Table from '../components/Table';

const Home = () => {

    let auth = useSelector((state) => state.GetAuth.is_auth);

    return auth ? (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Table/>
                    </div>
                </div>
            </div> )
        :
        <Redirect to={'/login'} />
}

export default Home;
