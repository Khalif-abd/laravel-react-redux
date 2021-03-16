import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const NavBar = () => {

    let auth = useSelector((state) => state.GetAuth.is_auth);

    return (
        <div className=" float-right mx-5">
        { auth ?
            <Link to={"/exit"} className={"btn btn-primary"}>Выход</Link>
            :
            false
        }
        </div>
    )
}

export default NavBar;
