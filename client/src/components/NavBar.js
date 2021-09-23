import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom"
import {Nav, Navbar, Button} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {IsAuthRequest} from "../store/actions/user";

class NavBar extends Component {


    onAuthorization =  () => {
// const {loginRouter}= this.state
        // this.setState({loginRouter:LOGIN_ROUTE})
         this.props.history.push(LOGIN_ROUTE)

    }

    logOut = async () => {
        await this.props.IsAuthRequest(true)
        window.location.href = "/";
    }

    render() {
        const {history} = this.props
        const {token, myAccount} = this.props

        return (
            <div>

                <Navbar bg="dark" variant="dark">

                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}> Интернет магазин </NavLink>
                    {token ? <Nav className="ml-auto" style={{color: 'white'}}>
                            {
                                myAccount.role === "ADMIN" ?
                                    <Button
                                        onClick={() => history.push(ADMIN_ROUTE)}
                                        variant={"outline-light"}>
                                        Админ панель
                                    </Button>
                                    :
                                    <Button
                                        onClick={() => history.push(BASKET_ROUTE)}
                                        variant={"outline-light"}>
                                        Корзинка
                                    </Button>
                            }

                            <Button
                                onClick={() => this.logOut()}
                                variant={"outline-light"} className="ml-2">Выйти</Button>
                        </Nav> :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={this.onAuthorization}>Aвторизация</Button>
                        </Nav>
                    }
                </Navbar>

            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    isAuth: state.user.isAuth,
    userList: state.loginins.userList,
    token: state.loginins.token,
    myAccount: state.loginins.myAccount,

})

const mapDispatchToProps = {
    IsAuthRequest

}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(NavBar)


export default withRouter(Container);
