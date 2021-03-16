import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {isAuth} from '../redux/action/authAction';
import Login from './../pages/Login';
import Home from './../pages/Home';
import Exit from './../pages/Exit';
import NavBar from '../components/NavBar';

const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(isAuth())
    },[dispatch]);

    return (
        <Router>
            <NavBar/>
        <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/exit' component={Exit} />
            <Route path='*' component={Login} />
        </Switch>
    </Router>
    );
}

export default App;
