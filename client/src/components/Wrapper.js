import React from 'react';
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes";
import {IsAuthRequest} from "../store/actions/user";

const Wrapper =(props) => {
        return (
            <Switch>
                {props.token && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {
                    !props.token && publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </Switch>
        );
}

const mapSateToProps = (state) => ({
    token: state.loginins.token,
    isAuth: state.user.isAuth,
})

const mapDispatchToProps = {
    IsAuthRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Wrapper)


export default Container;
